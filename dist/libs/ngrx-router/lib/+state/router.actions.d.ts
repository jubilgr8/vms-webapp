import { NgrxRoute } from './router.interfaces';
export declare const go: import("@ngrx/store").ActionCreator<"[router] Go", (props: {
    to: NgrxRoute;
}) => {
    to: NgrxRoute;
} & import("@ngrx/store/src/models").TypedAction<"[router] Go">>;
export declare const back: import("@ngrx/store").ActionCreator<"[router] BACK", () => import("@ngrx/store/src/models").TypedAction<"[router] BACK">>;
export declare const forward: import("@ngrx/store").ActionCreator<"[router] FORWARD", () => import("@ngrx/store/src/models").TypedAction<"[router] FORWARD">>;
//# sourceMappingURL=router.actions.d.ts.map