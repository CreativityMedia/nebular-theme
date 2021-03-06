/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbToastrConfig } from './toastr-config';
export declare enum NbToastStatus {
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning",
    PRIMARY = "primary",
    DANGER = "danger",
    DEFAULT = "default"
}
export declare class NbToast {
    title: string;
    message: string;
    config: NbToastrConfig;
}
