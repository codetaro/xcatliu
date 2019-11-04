// 三斜线指令的前面只允许出现单行或多行注释
/// <reference types="jquery" />

declare function foobar(options: JQuery.AjaxSettings): string;

declare namespace JQuery {
    interface CustomOptions {
        bar: string;
    }
}

interface JQueryStatic {
    foo(options: JQuery.CustomOptions): string;
}