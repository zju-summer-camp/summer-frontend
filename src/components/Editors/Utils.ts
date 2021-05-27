/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Editor } from './components/Editor';

const validEvents = [
  'onActivate',
  'onAddUndo',
  'onBeforeAddUndo',
  'onBeforeExecCommand',
  'onBeforeGetContent',
  'onBeforeRenderUI',
  'onBeforeSetContent',
  'onBeforePaste',
  'onBlur',
  'onChange',
  'onClearUndos',
  'onClick',
  'onContextMenu',
  'onCopy',
  'onCut',
  'onDblclick',
  'onDeactivate',
  'onDirty',
  'onDrag',
  'onDragDrop',
  'onDragEnd',
  'onDragGesture',
  'onDragOver',
  'onDrop',
  'onExecCommand',
  'onFocus',
  'onFocusIn',
  'onFocusOut',
  'onGetContent',
  'onHide',
  'onInit',
  'onKeyDown',
  'onKeyPress',
  'onKeyUp',
  'onLoadContent',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',
  'onNodeChange',
  'onObjectResizeStart',
  'onObjectResized',
  'onObjectSelected',
  'onPaste',
  'onPostProcess',
  'onPostRender',
  'onPreProcess',
  'onProgressState',
  'onRedo',
  'onRemove',
  'onReset',
  'onSaveContent',
  'onSelectionChange',
  'onSetAttrib',
  'onSetContent',
  'onShow',
  'onSubmit',
  'onUndo',
  'onVisualAid'
];

const isValidKey = (key: string) => validEvents.map(event => event.toLowerCase()).indexOf(key.toLowerCase()) !== -1;

const bindHandlers = (initEvent: Event, listeners: any, editor: any): void => {
  Object.keys(listeners)
    .filter(isValidKey)
    .forEach((key: string) => {
      const handler = listeners[key];
      if (typeof handler === 'function') {
        if (key === 'onInit') {
          handler(initEvent, editor);
        } else {
          editor.on(key.substring(2), (e: any) => handler(e, editor));
        }
      }
    });
};

const bindModelHandlers = (ctx: Editor, editor: any) => {
  const modelEvents = ctx.$props.modelEvents ? ctx.$props.modelEvents : null;
  const normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents;

  editor.on(normalizedEvents ? normalizedEvents : 'change input undo redo', () => {
    ctx.$emit('input', editor.getContent({ format: ctx.$props.outputFormat }));
  });
};

const initEditor = (initEvent: Event, ctx: Editor, editor: any) => {
  const value = ctx.$props.value ? ctx.$props.value : '';
  const initialValue = ctx.$props.initialValue ? ctx.$props.initialValue : '';

  editor.setContent(value || (ctx.initialized ? ctx.cache : initialValue));

  // 绑定 value 的监听器，防止用户使用的是 :value 而不是 v-model
  ctx.$watch('value', (val: string, prevVal: string) => {
    if (editor && typeof val === 'string' && val !== prevVal && val !== editor.getContent({ format: ctx.$props.outputFormat })) {
      editor.setContent(val);
    }
  });

  // 检查是否使用了 v-model，若是，则绑定 input 事件的监听器，实现数据的双向绑定
  // 绑定 change 和 keyup 等事件
  if (ctx.$listeners.input) {
    bindModelHandlers(ctx, editor);
  }

  bindHandlers(initEvent, ctx.$listeners, editor);
  ctx.initialized = true;
};

let unique = 0;
// 为什么要加上uid呢，供多个使用？
const uuid = (prefix: string): string => {
  const time = Date.now();
  const random = Math.floor(Math.random() * 1000000000);

  unique++;

  return prefix + '_' + random + unique + String(time);
};

const isTextarea = (element: Element | null): element is HTMLTextAreaElement => {
  return element !== null && element.tagName.toLowerCase() === 'textarea';
};

const normalizePluginArray = (plugins?: string | string[]): string[] => {
  if (typeof plugins === 'undefined' || plugins === '') {
    return [];
  }

  return Array.isArray(plugins) ? plugins : plugins.split(' ');
};

const mergePlugins = (initPlugins: string | string[], inputPlugins?: string | string[]) =>
  normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));

const isNullOrUndefined = (value: any): value is null | undefined => value === null || value === undefined;

export {
  bindHandlers,
  bindModelHandlers,
  initEditor,
  isValidKey,
  uuid,
  isTextarea,
  mergePlugins,
  isNullOrUndefined
};
