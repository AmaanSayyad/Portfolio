(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/4d593_framer-motion_dist_es_gestures_04d6af._.js", {

"[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "createLock": ()=>createLock,
    "getGlobalLock": ()=>getGlobalLock,
    "isDragActive": ()=>isDragActive
});
function createLock(name) {
    let lock = null;
    return ()=>{
        const openLock = ()=>{
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
const globalHorizontalLock = createLock("dragHorizontal");
const globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    let lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    } else if (drag === "x") {
        lock = globalHorizontalLock();
    } else {
        const openHorizontal = globalHorizontalLock();
        const openVertical = globalVerticalLock();
        if (openHorizontal && openVertical) {
            lock = ()=>{
                openHorizontal();
                openVertical();
            };
        } else {
            // Release the locks because we don't use them
            if (openHorizontal) openHorizontal();
            if (openVertical) openVertical();
        }
    }
    return lock;
}
function isDragActive() {
    // Check the gesture lock - if we get it, it means no drag gesture is active
    // and we can safely fire the tap gesture.
    const openGestureLock = getGlobalLock(true);
    if (!openGestureLock) return true;
    openGestureLock();
    return false;
}
;

})()),
"[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/gestures/hover.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "HoverGesture": ()=>HoverGesture
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/utils/pipe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$utils$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/motion/features/Feature.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
function addHoverEvent(node, isActive) {
    const eventName = isActive ? "pointerenter" : "pointerleave";
    const callbackName = isActive ? "onHoverStart" : "onHoverEnd";
    const handleEvent = (event, info)=>{
        if (event.pointerType === "touch" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$utils$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragActive"])()) return;
        const props = node.getProps();
        if (node.animationState && props.whileHover) {
            node.animationState.setActive("whileHover", isActive);
        }
        const callback = props[callbackName];
        if (callback) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(()=>callback(event, info));
        }
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPointerEvent"])(node.current, eventName, handleEvent, {
        passive: !node.getProps()[callbackName]
    });
}
class HoverGesture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feature"] {
    mount() {
        this.unmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
    }
    unmount() {}
}
;

})()),
"[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/gestures/focus.mjs [app-client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/gestures/focus.mjs [app-client] (ecmascript)\n\nCaused by:\n- Next.js package not found\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/gestures/focus.mjs [app-client] (ecmascript)\n- Execution of EcmascriptChunkItemContent::module_factory failed\n- Execution of EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- Execution of <ModuleAssetContext as AssetContext>::process_resolve_result failed\n- Execution of process_default failed\n- Execution of ModuleOptions::new failed\n- Execution of FileSystemPath::join failed\n- Execution of get_next_package failed\n- Next.js package not found");

}}),
"[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */ __turbopack_esm__({
    "isNodeOrChild": ()=>isNodeOrChild
});
const isNodeOrChild = (parent, child)=>{
    if (!child) {
        return false;
    } else if (parent === child) {
        return true;
    } else {
        return isNodeOrChild(parent, child.parentElement);
    }
};
;

})()),
"[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/gestures/press.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "PressGesture": ()=>PressGesture
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/events/event-info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/events/add-dom-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/motion/features/Feature.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/utils/pipe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$utils$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/utils/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.2.12_react-dom@19.0.0-rc-9c6806964f-20240703_react@19.0.0-rc-9c6806964f-2024_uwxiqbucrgownhelhkkwzi2xmi/node_modules/framer-motion/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
function fireSyntheticPointerEvent(name, handler) {
    if (!handler) return;
    const syntheticPointerEvent = new PointerEvent("pointer" + name);
    handler(syntheticPointerEvent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractEventInfo"])(syntheticPointerEvent));
}
class PressGesture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feature"] {
    constructor(){
        super(...arguments);
        this.removeStartListeners = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
        this.removeEndListeners = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
        this.removeAccessibleListeners = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
        this.startPointerPress = (startEvent, startInfo)=>{
            if (this.isPressing) return;
            this.removeEndListeners();
            const props = this.node.getProps();
            const endPointerPress = (endEvent, endInfo)=>{
                if (!this.checkPressEnd()) return;
                const { onTap, onTapCancel, globalTapTarget } = this.node.getProps();
                /**
                 * We only count this as a tap gesture if the event.target is the same
                 * as, or a child of, this component's element
                 */ const handler = !globalTapTarget && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeOrChild"])(this.node.current, endEvent.target) ? onTapCancel : onTap;
                if (handler) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(()=>handler(endEvent, endInfo));
                }
            };
            const removePointerUpListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPointerEvent"])(window, "pointerup", endPointerPress, {
                passive: !(props.onTap || props["onPointerUp"])
            });
            const removePointerCancelListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPointerEvent"])(window, "pointercancel", (cancelEvent, cancelInfo)=>this.cancelPress(cancelEvent, cancelInfo), {
                passive: !(props.onTapCancel || props["onPointerCancel"])
            });
            this.removeEndListeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2$2e$12_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$20240703_react$40$19$2e$0$2e$0$2d$rc$2d$9c6806964f$2d$2024_uwxiqbucrgownhelhkkwzi2xmi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(removePointerUpListener, removePointerCancelListener);
            this.startPress(startEvent, startInfo);
        };
        this.startAccessiblePress = ()=>{
            const handleKeydown = (keydownEvent)=>{
                if (keydownEvent.key !== "Enter" || this.isPressing) return;
                const handleKeyup = (keyupEvent)=>{
                    if (keyupEvent.key !== "Enter" || !this.checkPressEnd()) return;
                    fireSyntheticPointerEvent("up", (event, info)=>{
                        const { onTap } = this.node.getProps();
                        if (onTap) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$2