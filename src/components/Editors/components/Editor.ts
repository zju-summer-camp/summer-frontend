/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options';
import { CreateElement, Vue } from 'vue/types/vue';

import { ScriptLoader } from '../ScriptLoader';
import { getTinymce } from '../TinyMCE';
import { initEditor, isTextarea, mergePlugins, uuid, isNullOrUndefined } from '../Utils';
import { editorProps, PropTypes } from './EditorPropTypes';

declare module 'vue/types/vue' {
  interface Vue {
    elementId: string;
    element: Element | null;
    editor: any;
    inlineEditor: boolean;
    initialized: boolean;
    cache: string;
  }
}

export interface Editor extends Vue {
  $props: Partial<PropTypes>;
}

const renderInline = (h: CreateElement, id: string, tagName?: string) => {
  return h(tagName ? tagName : 'div', {
    attrs: { id }
  });
};

const renderIframe = (h: CreateElement, id: string) => {
  return h('textarea', {
    attrs: { id },
    style: { visibility: 'hidden' }
  });
};

const initialise = (ctx: Editor) => () => {
  // 使用组件 props 初始化参数对象 finalInit
  const finalInit = {
    ...ctx.$props.init,
    readonly: ctx.$props.disabled,
    selector: `#${ctx.elementId}`,
    plugins: mergePlugins(ctx.$props.init && ctx.$props.init.plugins, ctx.$props.plugins),
    toolbar: ctx.$props.toolbar || (ctx.$props.init && ctx.$props.init.toolbar),
    inline: ctx.inlineEditor,
    setup: (editor: any) => {
      ctx.editor = editor;
      editor.on('init', (e: Event) => initEditor(e, ctx, editor));

      if (ctx.$props.init && typeof ctx.$props.init.setup === 'function') {
        ctx.$props.init.setup(editor);
      }
    }
  };

  // 针对 textarea 类型的样式输入框做特殊处理
  if (isTextarea(ctx.element)) {
    ctx.element.style.visibility = '';
    ctx.element.style.display = '';
  }

  // 使用 tinyMCE 提供的 init 接口，将普通文本框渲染为富文本编辑器
  getTinymce().init(finalInit);
};

export const Editor: ThisTypedComponentOptionsWithRecordProps<Vue, {}, {}, {}, PropTypes> = {
  props: editorProps,
  created() {
    this.elementId = this.$props.id || uuid('tiny-vue');
    this.inlineEditor = (this.$props.init && this.$props.init.inline) || this.$props.inline;
    this.initialized = false;
  },
  watch: {
    disabled() {
      (this as any).editor.setMode(this.disabled ? 'readonly' : 'design');
    },
  },
  mounted() {
    this.element = this.$el;
    if (getTinymce() !== null) {
      initialise(this)();
    } else if (this.element && this.element.ownerDocument) {
      const channel = this.$props.cloudChannel ? this.$props.cloudChannel : '5';
      const apiKey = this.$props.apiKey ? this.$props.apiKey : 'no-api-key';

      const scriptSrc = isNullOrUndefined(this.$props.tinymceScriptSrc) ?
        `https://cdn.tiny.cloud/1/${apiKey}/tinymce/${channel}/tinymce.min.js` :
        this.$props.tinymceScriptSrc;
        
      // 动态插入    <script referrerpolicy="origin" type="application/javascript" id="tiny-script" src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js"></script>
      ScriptLoader.load(
        this.element.ownerDocument,
        scriptSrc,
        initialise(this)
      );
    }
  },
  beforeDestroy() {
    if (getTinymce() !== null) {
      getTinymce().remove(this.editor);
    }
  },
  deactivated() {
    if (!this.inlineEditor) {
      this.cache = this.editor.getContent();
      getTinymce()?.remove(this.editor);
    }
  },
  activated() {
    if (!this.inlineEditor && this.initialized) {
      initialise(this)();
    }
  },
  render(h: any) {
    return this.inlineEditor ? renderInline(h, this.elementId, this.$props.tagName) : renderIframe(h, this.elementId);
  }
};
