import { Id, IHandlers } from "../../ts-common/types";
import { VNode } from "../../ts-common/dom";
import { IEventSystem } from "../../ts-common/events";
import { View } from "../../ts-common/view";
import { TreeCollection, IDataEventsHandlersMap } from "../../ts-data";
import { DataEvents, IItem, IGroups, NavigationBarEvents, INavbarEventHandlersMap, INavbarConfig } from "./types";
export declare abstract class Navbar<T extends IItem = IItem> extends View {
    data: TreeCollection<T>;
    events: IEventSystem<DataEvents | NavigationBarEvents, IDataEventsHandlersMap & INavbarEventHandlersMap>;
    config: INavbarConfig;
    protected _vpopups: VNode;
    protected _activeMenu: Id;
    protected _activePosition: {
        left: number;
        right: number;
        top: number;
        bottom: number;
        zIndex?: number;
    };
    protected _isContextMenu: boolean;
    protected _handlers: IHandlers;
    protected _currentRoot: Id;
    protected _factory: (item: T, asMenuItem?: boolean) => any;
    protected _groups: IGroups;
    private _isActive;
    private _popupActive;
    private _currentTimeout;
    private _documentClick;
    private _documentHaveListener;
    private _rootItem;
    private _activeParents;
    private _keyManager;
    constructor(element?: string | HTMLElement | null, config?: any);
    paint(): void;
    disable(ids: Id | Id[]): void;
    enable(ids: Id | Id[]): void;
    isDisabled(id: Id): boolean;
    show(ids: Id | Id[]): void;
    hide(ids: Id | Id[]): void;
    destructor(): void;
    select(id: Id, unselect?: boolean): void;
    unselect(id?: Id): void;
    isSelected(id: Id): boolean;
    getSelected(): Id[];
    protected abstract _getFactory(): (item: T, asMenuItem?: boolean) => any;
    protected _customHandlers(): {};
    protected _close(e: MouseEvent | TouchEvent): void;
    protected _init(): void;
    protected _initHandlers(): void;
    protected _initEvents(): void;
    protected _getMode(item: T, root: Id, _active?: boolean): "bottom" | "right";
    protected _drawMenuItems(id: Id, asMenuItem?: boolean): any[];
    protected _setRoot(_id: Id): void;
    protected _getParents(id: any, root: any): Id[];
    protected _listenOuterClick(): void;
    protected _customInitEvents(): void;
    private _drawPopups;
    private _onMenuItemClick;
    private _activeItemChange;
    private _resetHotkeys;
    private _setProp;
}
