import { IEventSystem } from "../../ts-common/events";
import { View } from "../../ts-common/view";
import { Layout, ILayoutConfig, ICellConfig } from "../../ts-layout";
import { IAnyObj } from "../../ts-common/types";
import { FormEvents, IItemConfig, IFormEventHandlersMap, IForm, ClearMethod, IFormConfig, TFormDataCallback, TProps } from "./types";
export declare class Form extends View implements IForm {
    config: IFormConfig;
    events: IEventSystem<FormEvents, IFormEventHandlersMap>;
    layout: Layout;
    private _isValid;
    protected _attachments: {
        [name: string]: any;
    };
    protected _state: {
        [key: string]: any;
    };
    private container;
    constructor(container: HTMLElement | string | null, config: IFormConfig);
    paint(): void;
    send(url: string, method?: string, asFormData?: boolean): Promise<any> | void;
    clear(method?: ClearMethod): void;
    setValue(obj: IAnyObj): void;
    getValue<T extends boolean = false>(asFormData?: boolean): T extends true ? FormData : IAnyObj;
    getItem(name: string): any;
    validate(silent?: boolean): boolean;
    setProperties(arg: string | {
        [name: string]: TProps;
    }, props?: TProps): void;
    getProperties(name?: string): {
        [name: string]: TProps;
    } | TProps;
    show(): void;
    hide(init?: boolean): void;
    setFocus(name: string): void;
    blur(name?: string): void;
    isVisible(name?: string): boolean;
    disable(): void;
    enable(): void;
    isDisabled(name?: string): boolean;
    forEach(callback: TFormDataCallback): void;
    destructor(): void;
    getRootView(): any;
    protected _addLayoutItem(item: IItemConfig): ICellConfig;
    protected _initItemHandlers(item: IItemConfig, name: string): void;
    protected _changeProps(name: any, props: any, config: any): void;
    private getCellCSS;
    private _addLayoutItems;
    private _checkLayoutConfig;
    protected _createLayoutConfig(config: IFormConfig, layoutConfig: ILayoutConfig): void;
    protected _initUI(container: HTMLElement | string): void;
    private _clear;
    private _clearValidate;
    private _formContainerShow;
    private _formContainerHide;
    private _send;
}
