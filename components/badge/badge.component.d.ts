/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbLayoutDirectionService } from '../../services/direction.service';
/**
 * Badge is a simple labeling component.
 * It can be used to add additional information to any content or highlight unread items.
 *
 * Element is absolute positioned, so parent should be
 * [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
 * It means parent `position` should be set to anything except `static`, e.g. `relative`,
 * `absolute`, `fixed`, or `sticky`.
 *
 * ### Installation
 *
 * Import `NbBadgeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbBadgeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Badge with default position and status(color):
 *
 * ```html
 * <nb-badge text="badgeText"></nb-badge>
 * ```
 *
 * For example, badge can be placed into nb-card header:
 * @stacked-example(Showcase, badge/badge-showcase.component)
 *
 * Badge located on the bottom right with warning status:
 *
 * ```html
 * <nb-badge text="badgeText" status="warning" position="bottom right">
 * </nb-badge>
 * ```
 *
 * @styles
 *
 * badge-fg-text:
 * badge-primary-bg-color:
 * badge-success-bg-color:
 * badge-info-bg-color:
 * badge-warning-bg-color:
 * badge-danger-bg-color:
 */
export declare class NbBadgeComponent {
    private layoutDirectionService;
    static readonly TOP_LEFT = "top left";
    static readonly TOP_RIGHT = "top right";
    static readonly BOTTOM_LEFT = "bottom left";
    static readonly BOTTOM_RIGHT = "bottom right";
    static readonly TOP_START = "top start";
    static readonly TOP_END = "top end";
    static readonly BOTTOM_START = "bottom start";
    static readonly BOTTOM_END = "bottom end";
    static readonly STATUS_PRIMARY = "primary";
    static readonly STATUS_INFO = "info";
    static readonly STATUS_SUCCESS = "success";
    static readonly STATUS_WARNING = "warning";
    static readonly STATUS_DANGER = "danger";
    colorClass: string;
    /**
     * Text to display
     * @type string
     */
    text: string;
    /**
     * Badge position
     *
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right',
     * 'top start', 'top end', 'bottom start', 'bottom end'
     * @type string
     */
    position: string;
    /**
     * Badge status (adds specific styles):
     * 'primary', 'info', 'success', 'warning', 'danger'
     * @param {string} val
     * @type string
     */
    status: any;
    readonly positionClass: string;
    constructor(layoutDirectionService: NbLayoutDirectionService);
}
