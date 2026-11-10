import{n as e}from"./rolldown-runtime-Db01ssZC.js";import{t}from"./jsx-runtime-BxZPLZy3.js";import{n,t as r}from"./react-Cd8OJmTE.js";import{n as i,t as a}from"./use-merge-refs-BNmiIksj.js";import{n as o,r as s,s as c,t as l}from"./build-module-CI6dFhun.js";import{a as u,i as ee}from"./iframe-CwUsWvvH.js";import{i as d,n as f,r as p,t as te}from"./MenuSubmenuTrigger-CsZ8OkVC.js";import{Cc as ne,Cl as m,Ri as h,fn as g,hl as _,mi as v,n as y,pl as b,to as re,yl as ie,zs as ae}from"./build-module-Teh08q_Z.js";import{n as oe,t as se}from"./resets.module-D-U9cA9i.js";import{n as ce,t as le}from"./global-css-defense.module-BsymGVar.js";import{n as ue,t as de}from"./icon-DZOHxLxd.js";import{C as fe,E as pe,S as x,T as me,_ as S,a as C,b as he,c as ge,d as w,f as _e,g as ve,h as T,i as ye,l as E,m as be,n as xe,o as Se,p as D,r as O,s as k,t as A,u as Ce,v as we,x as Te,y as Ee}from"./trigger-DEjAPVI-.js";import{a as j,c as De,d as M,f as Oe,i as ke,l as N,m as Ae,n as je,o as Me,p as P,r as F,s as I,t as L,u as Ne}from"./separator-DDS4-Ojm.js";import{n as Pe,t as R}from"./link-item-CeKjdAMc.js";function SubmenuRoot(e){let t=(0,r.useRef)(null);return(0,z.jsx)(Ee.Provider,{value:{isSubmenu:!0,submenuTriggerRef:t},children:(0,z.jsx)(he.Provider,{value:null,children:(0,z.jsx)(p,{...e})})})}var z;function init_submenu_root(){return(init_submenu_root=e((()=>{d(),n(),x(),z=t();try{SubmenuRoot.__docgenInfo={description:`Groups all parts of a nested submenu.`,displayName:`SubmenuRoot`,filePath:`/home/runner/work/gutenberg/gutenberg/packages/ui/src/menu/submenu-root.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`gutenberg/packages/ui/src/menu/types.ts`,name:`SubmenuRootProps`}],description:"The submenu subcomponents (`Menu.SubmenuTrigger`, `Menu.Popup`, etc.).",name:`children`,parent:{fileName:`gutenberg/packages/ui/src/menu/types.ts`,name:`SubmenuRootProps`},required:!1,tags:{},type:{name:`ReactNode`}},highlightItemOnHover:{defaultValue:{value:`true`},declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts`,name:`MenuRootProps`}],description:"Whether moving the pointer over items should highlight them.\nDisabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.",name:`highlightItemOnHover`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts`,name:`MenuRootProps`},required:!1,tags:{},type:{name:`boolean`}},actionsRef:{defaultValue:null,declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts`,name:`MenuRootProps`}],description:"A ref to imperative actions.\n- `unmount`: Ends the closing phase of the menu after an externally controlled closing animation finishes.\n  Call `preventUnmountOnClose()` in `onOpenChange` first, otherwise the menu completes closing on its own.\n  Whether it leaves the DOM is decided by `keepMounted` on the portal.\n- `close`: Closes the menu imperatively when called.",name:`actionsRef`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts`,name:`MenuRootProps`},required:!1,tags:{},type:{name:`RefObject<MenuRootActions | null>`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRoot.d.mts`,name:`MenuSubmenuRootProps`}],description:`Event handler called when the menu is opened or closed.`,name:`onOpenChange`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRoot.d.mts`,name:`MenuSubmenuRootProps`},required:!1,tags:{},type:{name:`((open: boolean, eventDetails: MenuRootChangeEventDetails) => void)`}},defaultOpen:{defaultValue:{value:`false`},declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts`,name:`MenuRootProps`}],description:`Whether the menu is initially open.

To render a controlled menu, use the \`open\` prop instead.`,name:`defaultOpen`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts`,name:`MenuRootProps`},required:!1,tags:{},type:{name:`boolean`}},open:{defaultValue:null,declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts`,name:`MenuRootProps`}],description:`Whether the menu is currently open.`,name:`open`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts`,name:`MenuRootProps`},required:!1,tags:{},type:{name:`boolean`}},onOpenChangeComplete:{defaultValue:null,declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts`,name:`MenuRootProps`}],description:`Event handler called after any animations complete when the menu is opened or closed.`,name:`onOpenChangeComplete`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts`,name:`MenuRootProps`},required:!1,tags:{},type:{name:`((open: boolean) => void)`}},loopFocus:{defaultValue:{value:`true`},declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts`,name:`MenuRootProps`}],description:`Whether to loop keyboard focus back to the first item
when the end of the list is reached while using the arrow keys.`,name:`loopFocus`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/root/MenuRoot.d.mts`,name:`MenuRootProps`},required:!1,tags:{},type:{name:`boolean`}},closeParentOnEsc:{defaultValue:{value:`false`},declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRoot.d.mts`,name:`MenuSubmenuRootProps`}],description:`When in a submenu, determines whether pressing the Escape key
closes the entire menu, or only the current child menu.`,name:`closeParentOnEsc`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRoot.d.mts`,name:`MenuSubmenuRootProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var B,V;function init_submenu_trigger(){return(init_submenu_trigger=e((()=>{f(),u(),n(),a(),y(),ue(),ce(),se(),me(),x(),D(),B=t(),V=(0,r.forwardRef)(function MenuSubmenuTrigger$1({children:e,className:t,prefix:n,shortcut:r,suffix:a,"aria-describedby":o,"aria-keyshortcuts":s,"aria-label":c,"aria-labelledby":l,...u},d){let{submenuTriggerRef:f}=fe(),p=i([d,f??null]),{contentChildren:m,contentContextValue:h,itemAriaProps:g,shortcutDescriptionId:_}=be(e,{"aria-describedby":o,"aria-keyshortcuts":s,"aria-label":c,"aria-labelledby":l,shortcut:r});return(0,B.jsx)(te,{ref:p,...g,className:ee(le.div,oe[`box-sizing`],pe.item,t),...u,children:(0,B.jsx)(Te.Provider,{value:h,children:(0,B.jsx)(_e,{prefix:n,shortcut:r,shortcutDescriptionId:_,suffix:a,trailing:(0,B.jsx)(de,{className:pe[`submenu-chevron`],icon:ne,size:24,"aria-hidden":`true`}),children:m})})})});try{V.__docgenInfo={description:`Renders a menu item that opens a submenu.`,displayName:`SubmenuTrigger`,filePath:`/home/runner/work/gutenberg/gutenberg/packages/ui/src/menu/submenu-trigger.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts`,name:`MenuSubmenuTriggerProps`}],description:`@ignore`,name:`id`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts`,name:`MenuSubmenuTriggerProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts`,name:`MenuSubmenuTriggerProps`}],description:`Overrides the text used for keyboard text navigation and filtering.
Falls back to the rendered text when not provided.`,name:`label`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts`,name:`MenuSubmenuTriggerProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`gutenberg/packages/ui/src/utils/types.ts`,name:`TypeLiteral`}],description:`CSS style to apply to the element.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts`,name:`MenuSubmenuTriggerProps`}],description:`Whether the component should ignore user interaction.`,name:`disabled`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts`,name:`MenuSubmenuTriggerProps`},required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`gutenberg/packages/ui/src/utils/types.ts`,name:`TypeLiteral`}],description:`CSS class name to apply to the element.`,name:`className`,required:!1,tags:{},type:{name:`string`}},onClick:{defaultValue:null,declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts`,name:`MenuSubmenuTriggerProps`}],description:``,name:`onClick`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts`,name:`MenuSubmenuTriggerProps`},required:!1,tags:{},type:{name:`((event: BaseUIEvent<MouseEvent<HTMLDivElement, MouseEvent>>) => void)`}},render:{defaultValue:null,declarations:[{fileName:`gutenberg/packages/ui/src/utils/types.ts`,name:`TypeLiteral`}],description:`Replaces the component's default HTML element using a given React
element, or a function that returns a React element.`,name:`render`,required:!1,tags:{},type:{name:`ComponentRenderFn<HTMLAttributesWithRef<any>> | ReactElement<Record<string, unknown>, string | JSXElementConstructor<any>>`}},nativeButton:{defaultValue:{value:`false`},declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts`,name:`NonNativeButtonProps`}],description:"Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",name:`nativeButton`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/internals/types.d.mts`,name:`NonNativeButtonProps`},required:!1,tags:{},type:{name:`boolean`}},delay:{defaultValue:{value:`100`},declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts`,name:`MenuSubmenuTriggerProps`}],description:`How long to wait before the menu may be opened on hover. Specified in milliseconds.

Requires the \`openOnHover\` prop.`,name:`delay`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts`,name:`MenuSubmenuTriggerProps`},required:!1,tags:{},type:{name:`number`}},closeDelay:{defaultValue:{value:`0`},declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts`,name:`MenuSubmenuTriggerProps`}],description:`How long to wait before closing the menu that was opened on hover.
Specified in milliseconds.

Requires the \`openOnHover\` prop.`,name:`closeDelay`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts`,name:`MenuSubmenuTriggerProps`},required:!1,tags:{},type:{name:`number`}},openOnHover:{defaultValue:{value:`true`},declarations:[{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts`,name:`MenuSubmenuTriggerProps`}],description:`Whether the menu should also open when the trigger is hovered.`,name:`openOnHover`,parent:{fileName:`gutenberg/node_modules/.store/@base-ui/react@1.9.0-uHNeM94OdjIeOtpyYGvL0A/node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.d.mts`,name:`MenuSubmenuTriggerProps`},required:!1,tags:{},type:{name:`boolean`}},prefix:{defaultValue:null,declarations:[{fileName:`gutenberg/packages/ui/src/menu/types.ts`,name:`MenuItemLayoutProps`}],description:`Presentational content before the item label. Use \`Menu.PrefixIcon\` for
icons that help users recognize actions or give a key action useful
prominence.

Prefer icons on every item in a group, or none. If only one item needs an
icon, reconsider its grouping. Prefer omitting it over adding unnecessary
icons to the other items. Mixed icon usage is supported. Avoid combining
a prefix icon and a description in the same item.`,name:`prefix`,parent:{fileName:`gutenberg/packages/ui/src/menu/types.ts`,name:`MenuItemLayoutProps`},required:!1,tags:{},type:{name:`ReactNode`}},suffix:{defaultValue:null,declarations:[{fileName:`gutenberg/packages/ui/src/menu/types.ts`,name:`MenuItemLayoutProps`}],description:`Presentational content displayed after the item label.`,name:`suffix`,parent:{fileName:`gutenberg/packages/ui/src/menu/types.ts`,name:`MenuItemLayoutProps`},required:!1,tags:{},type:{name:`ReactNode`}},shortcut:{defaultValue:null,declarations:[{fileName:`gutenberg/packages/ui/src/menu/types.ts`,name:`MenuItemLayoutProps`}],description:`The keyboard shortcut associated with this item. When provided, the
shortcut is displayed in the item and announced to assistive technology.

**Note**: This prop is for display and accessibility purposes only; the
consumer is responsible for implementing the actual keyboard event handler.`,name:`shortcut`,parent:{fileName:`gutenberg/packages/ui/src/menu/types.ts`,name:`MenuItemLayoutProps`},required:!1,tags:{},type:{name:`KeyboardShortcut`}},children:{defaultValue:null,declarations:[{fileName:`gutenberg/packages/ui/src/menu/types.ts`,name:`TypeLiteral`}],description:"One direct `Menu.ItemLabel`, followed by zero or more direct\n`Menu.ItemDescription` components.",name:`children`,required:!0,tags:{},type:{name:`MenuItemChildren`}}},tags:{}}}catch{}})))()}var H,Fe,U,W,G,K,q,J,Y,X,Z,Q,$;function init_index_story(){return(init_index_story=e((()=>{n(),y(),s(),ye(),xe(),Ce(),ge(),Se(),D(),ve(),we(),De(),Pe(),Ae(),Me(),ke(),Oe(),Ne(),je(),init_submenu_root(),init_submenu_trigger(),H=t(),Fe={title:`Components/@wordpress-ui/Menu`,id:`design-system-components-menu`,component:O,subcomponents:{"Menu.Trigger":A,"Menu.Portal":E,"Menu.Positioner":k,"Menu.Popup":C,"Menu.Item":w,"Menu.ItemLabel":T,"Menu.ItemDescription":S,"Menu.PrefixIcon":I,"Menu.LinkItem":R,"Menu.CheckboxItem":P,"Menu.RadioGroup":j,"Menu.RadioItem":F,"Menu.Group":M,"Menu.GroupLabel":N,"Menu.Separator":L,"Menu.SubmenuRoot":SubmenuRoot,"Menu.SubmenuTrigger":V},argTypes:{children:{control:!1}},parameters:{componentStatus:{status:`use-with-caution`,whereUsed:`global`,notes:"Not yet recommended while the APIs are still in flux, early Gutenberg migrations are being evaluated, and compatibility with overlays from `@wordpress/components` remains under review. See [WordPress/gutenberg#76135](https://github.com/WordPress/gutenberg/issues/76135)."}}},U={comfortableDensity:{displayShortcut:o.primary(`2`),ariaKeyShortcut:l.primary(`2`),label:c.primary(`2`)},developerResources:{displayShortcut:o.primary(`d`),ariaKeyShortcut:l.primary(`d`),label:c.primary(`d`)},downloads:{displayShortcut:o.primary(`d`),ariaKeyShortcut:l.primary(`d`),label:c.primary(`d`)},move:{displayShortcut:o.primary(`m`),ariaKeyShortcut:l.primary(`m`),label:c.primary(`m`)},save:{displayShortcut:o.primary(`s`),ariaKeyShortcut:l.primary(`s`),label:c.primary(`s`)},shared:{displayShortcut:o.primaryShift(`s`),ariaKeyShortcut:l.primaryShift(`s`),label:c.primaryShift(`s`)}},W={render:function Render(){let[e,t]=(0,r.useState)(!0),[n,i]=(0,r.useState)(!1),[a,o]=(0,r.useState)(`list`);return(0,H.jsxs)(O,{children:[(0,H.jsx)(A,{children:`Open menu`}),(0,H.jsxs)(C,{children:[(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Rename…`})}),(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Archive`})}),(0,H.jsx)(w,{shortcut:U.save,suffix:`Draft`,children:(0,H.jsx)(T,{children:`Save`})}),(0,H.jsx)(L,{}),(0,H.jsxs)(M,{children:[(0,H.jsx)(N,{children:`Links`}),(0,H.jsx)(R,{href:`#menu-default-example`,children:(0,H.jsx)(T,{children:`View details`})}),(0,H.jsx)(R,{href:`https://wordpress.org`,openInNewTab:!0,children:(0,H.jsx)(T,{children:`WordPress.org`})})]}),(0,H.jsx)(L,{}),(0,H.jsxs)(M,{children:[(0,H.jsx)(N,{children:`Visible columns`}),(0,H.jsx)(P,{checked:e,onCheckedChange:t,children:(0,H.jsx)(T,{children:`Bookmarks`})}),(0,H.jsx)(P,{checked:n,onCheckedChange:i,shortcut:U.downloads,children:(0,H.jsx)(T,{children:`Downloads`})})]}),(0,H.jsx)(L,{}),(0,H.jsxs)(j,{value:a,onValueChange:o,children:[(0,H.jsx)(N,{children:`View`}),(0,H.jsx)(F,{value:`list`,prefix:(0,H.jsx)(I,{icon:h}),children:(0,H.jsx)(T,{children:`List`})}),(0,H.jsx)(F,{value:`grid`,prefix:(0,H.jsx)(I,{icon:re}),children:(0,H.jsx)(T,{children:`Grid`})})]}),(0,H.jsx)(L,{}),(0,H.jsxs)(M,{"aria-label":`More actions`,children:[(0,H.jsxs)(SubmenuRoot,{children:[(0,H.jsx)(V,{shortcut:U.move,suffix:`3`,children:(0,H.jsx)(T,{children:`Move to`})}),(0,H.jsxs)(C,{children:[(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Favorites`})}),(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Archive`})}),(0,H.jsxs)(SubmenuRoot,{children:[(0,H.jsx)(V,{children:(0,H.jsx)(T,{children:`More destinations`})}),(0,H.jsxs)(C,{children:[(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Reviewed`})}),(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Shared`})})]})]})]})]}),(0,H.jsx)(w,{disabled:!0,children:(0,H.jsx)(T,{children:`Unavailable action`})})]})]})]})}},G={args:{children:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(A,{children:`Open menu`}),(0,H.jsxs)(C,{children:[(0,H.jsx)(R,{href:`https://wordpress.org`,openInNewTab:!0,children:(0,H.jsx)(T,{children:`WordPress.org`})}),(0,H.jsx)(R,{href:`https://developer.wordpress.org`,openInNewTab:!0,target:`wordpress-developer-resources`,shortcut:U.developerResources,suffix:`Docs`,children:(0,H.jsx)(T,{children:`WordPress developer resources`})}),(0,H.jsx)(R,{href:`#menu-link-item-example`,children:(0,H.jsx)(T,{children:`In-page destination`})})]})]})}},K={args:{children:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(A,{children:`Open menu`}),(0,H.jsxs)(C,{children:[(0,H.jsxs)(M,{children:[(0,H.jsx)(N,{children:`File`}),(0,H.jsx)(w,{shortcut:U.save,suffix:`Modified`,children:(0,H.jsx)(T,{children:`Save`})}),(0,H.jsx)(w,{disabled:!0,shortcut:U.downloads,children:(0,H.jsx)(T,{children:`Download`})}),(0,H.jsxs)(w,{children:[(0,H.jsx)(T,{children:`Delete…`}),(0,H.jsx)(S,{children:`Also deletes all versions of this item.`})]})]}),(0,H.jsx)(L,{}),(0,H.jsxs)(M,{children:[(0,H.jsx)(N,{children:`Organize`}),(0,H.jsx)(w,{prefix:(0,H.jsx)(I,{icon:ae}),children:(0,H.jsx)(T,{children:`Duplicate`})}),(0,H.jsx)(w,{prefix:(0,H.jsx)(I,{icon:b}),children:(0,H.jsx)(T,{children:`Archive`})})]})]})]})}},q={parameters:{docs:{description:{story:`Uses long text to demonstrate wrapping, multiple descriptions, and disabled items. The prefix, suffix, shortcut, and submenu chevron stay aligned with the first line of a wrapped label. Keep product menu labels short and descriptions rare.`}}},args:{children:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(A,{children:`Open menu`}),(0,H.jsxs)(C,{style:{width:240},children:[(0,H.jsxs)(w,{shortcut:U.save,suffix:`Modified`,children:[(0,H.jsx)(T,{children:`A long menu item label that wraps onto multiple lines`}),(0,H.jsx)(S,{children:`This deliberately long description should wrap below the label without overlapping the suffix or shortcut.`})]}),(0,H.jsxs)(SubmenuRoot,{children:[(0,H.jsx)(V,{prefix:(0,H.jsx)(I,{icon:v}),suffix:`Recent`,children:(0,H.jsx)(T,{children:`A submenu trigger with a long label that wraps onto multiple lines`})}),(0,H.jsx)(C,{children:(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Archive`})})})]}),(0,H.jsxs)(w,{children:[(0,H.jsx)(T,{children:`An item with more than one description`}),(0,H.jsx)(S,{children:`The first description wraps, and stays clear of the label above it.`}),(0,H.jsx)(S,{children:`A second description sits below the first with the same gap.`})]}),(0,H.jsxs)(w,{disabled:!0,shortcut:U.downloads,children:[(0,H.jsx)(T,{children:`A disabled item with a long label that wraps onto multiple lines`}),(0,H.jsx)(S,{children:`The disabled foreground treatment should apply to the label, description, and shortcut.`})]})]})]})}},J={args:{children:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(A,{children:`Open menu`}),(0,H.jsxs)(C,{children:[(0,H.jsxs)(M,{children:[(0,H.jsx)(N,{children:`File`}),(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`New draft`})}),(0,H.jsx)(w,{shortcut:U.save,children:(0,H.jsx)(T,{children:`Save`})}),(0,H.jsx)(w,{suffix:`Edited`,children:(0,H.jsx)(T,{children:`Save as copy…`})})]}),(0,H.jsx)(L,{}),(0,H.jsxs)(M,{children:[(0,H.jsx)(N,{children:`Organize`}),(0,H.jsx)(w,{prefix:(0,H.jsx)(I,{icon:v}),shortcut:U.move,suffix:`3`,children:(0,H.jsx)(T,{children:`Move to collection…`})}),(0,H.jsx)(w,{prefix:(0,H.jsx)(I,{icon:b}),suffix:`12`,children:(0,H.jsx)(T,{children:`Archive`})})]})]})]})}},Y={args:{children:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(A,{children:`Open menu`}),(0,H.jsxs)(C,{children:[(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Rename…`})}),(0,H.jsxs)(SubmenuRoot,{children:[(0,H.jsx)(V,{shortcut:U.move,children:(0,H.jsx)(T,{children:`Move to another collection`})}),(0,H.jsxs)(C,{children:[(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Archive`})}),(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Favorites`})}),(0,H.jsxs)(SubmenuRoot,{children:[(0,H.jsx)(V,{children:(0,H.jsx)(T,{children:`More destinations`})}),(0,H.jsxs)(C,{children:[(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Reviewed`})}),(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Shared`})})]})]})]})]}),(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Delete…`})})]})]})}},X={render:function Render(){let[e,t]=(0,r.useState)(!0),[n,i]=(0,r.useState)(!1),[a,o]=(0,r.useState)(!0),[s,c]=(0,r.useState)(!1);return(0,H.jsxs)(O,{children:[(0,H.jsx)(A,{children:`Columns`}),(0,H.jsxs)(C,{children:[(0,H.jsxs)(M,{children:[(0,H.jsx)(N,{children:`Visible columns`}),(0,H.jsx)(P,{checked:e,onCheckedChange:t,children:(0,H.jsx)(T,{children:`Bookmarks`})}),(0,H.jsx)(P,{checked:n,onCheckedChange:i,shortcut:U.downloads,children:(0,H.jsx)(T,{children:`Downloads`})})]}),(0,H.jsx)(L,{}),(0,H.jsxs)(M,{children:[(0,H.jsx)(N,{children:`Saved areas`}),(0,H.jsx)(P,{checked:a,onCheckedChange:o,prefix:(0,H.jsx)(I,{icon:b}),children:(0,H.jsx)(T,{children:`Archived`})}),(0,H.jsx)(P,{checked:s,onCheckedChange:c,prefix:(0,H.jsx)(I,{icon:g}),shortcut:U.shared,children:(0,H.jsx)(T,{children:`Shared`})})]})]})]})}},Z={render:function Render(){let[e,t]=(0,r.useState)(`left`),[n,i]=(0,r.useState)(`comfortable`);return(0,H.jsxs)(O,{children:[(0,H.jsx)(A,{children:`View options`}),(0,H.jsxs)(C,{children:[(0,H.jsxs)(j,{value:e,onValueChange:t,children:[(0,H.jsx)(N,{children:`Alignment`}),(0,H.jsx)(F,{value:`left`,prefix:(0,H.jsx)(I,{icon:ie}),children:(0,H.jsx)(T,{children:`Left`})}),(0,H.jsx)(F,{value:`center`,prefix:(0,H.jsx)(I,{icon:m}),children:(0,H.jsx)(T,{children:`Center`})}),(0,H.jsx)(F,{value:`right`,prefix:(0,H.jsx)(I,{icon:_}),children:(0,H.jsx)(T,{children:`Right`})})]}),(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Reset alignment`})}),(0,H.jsx)(L,{}),(0,H.jsxs)(j,{value:n,onValueChange:i,children:[(0,H.jsx)(N,{children:`Density`}),(0,H.jsx)(F,{value:`compact`,children:(0,H.jsx)(T,{children:`Compact`})}),(0,H.jsx)(F,{value:`comfortable`,shortcut:U.comfortableDensity,children:(0,H.jsx)(T,{children:`Comfortable`})}),(0,H.jsx)(F,{value:`spacious`,children:(0,H.jsx)(T,{children:`Spacious`})})]})]})]})}},Q={args:{children:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(A,{children:`Open menu`}),(0,H.jsxs)(C,{positioner:(0,H.jsx)(k,{side:`right`,align:`start`}),children:[(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Duplicate`})}),(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Move`})})]})]})}},$={name:`With Custom z-index`,args:{children:[(0,H.jsx)(A,{children:`Open menu`},`trigger`),(0,H.jsxs)(C,{portal:(0,H.jsx)(E,{style:{"--wp-ui-menu-z-index":`9999`}}),children:[(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Duplicate`})}),(0,H.jsx)(w,{children:(0,H.jsx)(T,{children:`Move…`})})]},`popup`)]}};try{$.__docgenInfo={description:"Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where a menu renders below another popover when you want\nit above.\n\nThe `--wp-ui-menu-z-index` CSS variable controls the z-index of the Menu\npositioner. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  Menu popup in the page), or\n- **Per instance**, by passing a `Menu.Portal` with a `style` (or\n  `className`) to `Menu.Popup`'s `portal` prop. The variable cascades from\n  the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",displayName:`WithCustomZIndex`,filePath:`/home/runner/work/gutenberg/gutenberg/packages/ui/src/menu/stories/index.story.tsx`,methods:[],props:{},tags:{}}}catch{}W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [bookmarks, setBookmarks] = useState(true);
    const [downloads, setDownloads] = useState(false);
    const [view, setView] = useState('list');
    return <Menu.Root>
                <Menu.Trigger>Open menu</Menu.Trigger>
                <Menu.Popup>
                    <Menu.Item>
                        <Menu.ItemLabel>Rename…</Menu.ItemLabel>
                    </Menu.Item>
                    <Menu.Item>
                        <Menu.ItemLabel>Archive</Menu.ItemLabel>
                    </Menu.Item>
                    <Menu.Item shortcut={SHORTCUTS.save} suffix="Draft">
                        <Menu.ItemLabel>Save</Menu.ItemLabel>
                    </Menu.Item>
                    <Menu.Separator />
                    <Menu.Group>
                        <Menu.GroupLabel>Links</Menu.GroupLabel>
                        <Menu.LinkItem href="#menu-default-example">
                            <Menu.ItemLabel>View details</Menu.ItemLabel>
                        </Menu.LinkItem>
                        <Menu.LinkItem href="https://wordpress.org" openInNewTab>
                            <Menu.ItemLabel>WordPress.org</Menu.ItemLabel>
                        </Menu.LinkItem>
                    </Menu.Group>
                    <Menu.Separator />
                    <Menu.Group>
                        <Menu.GroupLabel>Visible columns</Menu.GroupLabel>
                        <Menu.CheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
                            <Menu.ItemLabel>Bookmarks</Menu.ItemLabel>
                        </Menu.CheckboxItem>
                        <Menu.CheckboxItem checked={downloads} onCheckedChange={setDownloads} shortcut={SHORTCUTS.downloads}>
                            <Menu.ItemLabel>Downloads</Menu.ItemLabel>
                        </Menu.CheckboxItem>
                    </Menu.Group>
                    <Menu.Separator />
                    <Menu.RadioGroup value={view} onValueChange={setView}>
                        <Menu.GroupLabel>View</Menu.GroupLabel>
                        <Menu.RadioItem value="list" prefix={<Menu.PrefixIcon icon={list} />}>
                            <Menu.ItemLabel>List</Menu.ItemLabel>
                        </Menu.RadioItem>
                        <Menu.RadioItem value="grid" prefix={<Menu.PrefixIcon icon={grid} />}>
                            <Menu.ItemLabel>Grid</Menu.ItemLabel>
                        </Menu.RadioItem>
                    </Menu.RadioGroup>
                    <Menu.Separator />
                    <Menu.Group aria-label="More actions">
                        <Menu.SubmenuRoot>
                            <Menu.SubmenuTrigger shortcut={SHORTCUTS.move} suffix="3">
                                <Menu.ItemLabel>Move to</Menu.ItemLabel>
                            </Menu.SubmenuTrigger>
                            <Menu.Popup>
                                <Menu.Item>
                                    <Menu.ItemLabel>Favorites</Menu.ItemLabel>
                                </Menu.Item>
                                <Menu.Item>
                                    <Menu.ItemLabel>Archive</Menu.ItemLabel>
                                </Menu.Item>
                                <Menu.SubmenuRoot>
                                    <Menu.SubmenuTrigger>
                                        <Menu.ItemLabel>
                                            More destinations
                                        </Menu.ItemLabel>
                                    </Menu.SubmenuTrigger>
                                    <Menu.Popup>
                                        <Menu.Item>
                                            <Menu.ItemLabel>
                                                Reviewed
                                            </Menu.ItemLabel>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Menu.ItemLabel>
                                                Shared
                                            </Menu.ItemLabel>
                                        </Menu.Item>
                                    </Menu.Popup>
                                </Menu.SubmenuRoot>
                            </Menu.Popup>
                        </Menu.SubmenuRoot>
                        <Menu.Item disabled>
                            <Menu.ItemLabel>Unavailable action</Menu.ItemLabel>
                        </Menu.Item>
                    </Menu.Group>
                </Menu.Popup>
            </Menu.Root>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Menu.Trigger>Open menu</Menu.Trigger>
                <Menu.Popup>
                    <Menu.LinkItem href="https://wordpress.org" openInNewTab>
                        <Menu.ItemLabel>WordPress.org</Menu.ItemLabel>
                    </Menu.LinkItem>
                    <Menu.LinkItem href="https://developer.wordpress.org" openInNewTab target="wordpress-developer-resources" shortcut={SHORTCUTS.developerResources} suffix="Docs">
                        <Menu.ItemLabel>
                            WordPress developer resources
                        </Menu.ItemLabel>
                    </Menu.LinkItem>
                    <Menu.LinkItem href="#menu-link-item-example">
                        <Menu.ItemLabel>In-page destination</Menu.ItemLabel>
                    </Menu.LinkItem>
                </Menu.Popup>
            </>
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Menu.Trigger>Open menu</Menu.Trigger>
                <Menu.Popup>
                    <Menu.Group>
                        <Menu.GroupLabel>File</Menu.GroupLabel>
                        <Menu.Item shortcut={SHORTCUTS.save} suffix="Modified">
                            <Menu.ItemLabel>Save</Menu.ItemLabel>
                        </Menu.Item>
                        <Menu.Item disabled shortcut={SHORTCUTS.downloads}>
                            <Menu.ItemLabel>Download</Menu.ItemLabel>
                        </Menu.Item>
                        <Menu.Item>
                            <Menu.ItemLabel>Delete…</Menu.ItemLabel>
                            <Menu.ItemDescription>
                                Also deletes all versions of this item.
                            </Menu.ItemDescription>
                        </Menu.Item>
                    </Menu.Group>
                    <Menu.Separator />
                    <Menu.Group>
                        <Menu.GroupLabel>Organize</Menu.GroupLabel>
                        <Menu.Item prefix={<Menu.PrefixIcon icon={copy} />}>
                            <Menu.ItemLabel>Duplicate</Menu.ItemLabel>
                        </Menu.Item>
                        <Menu.Item prefix={<Menu.PrefixIcon icon={archive} />}>
                            <Menu.ItemLabel>Archive</Menu.ItemLabel>
                        </Menu.Item>
                    </Menu.Group>
                </Menu.Popup>
            </>
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Uses long text to demonstrate wrapping, multiple descriptions, and disabled items. The prefix, suffix, shortcut, and submenu chevron stay aligned with the first line of a wrapped label. Keep product menu labels short and descriptions rare.'
      }
    }
  },
  args: {
    children: <>
                <Menu.Trigger>Open menu</Menu.Trigger>
                <Menu.Popup style={{
        width: 240
      }}>
                    <Menu.Item shortcut={SHORTCUTS.save} suffix="Modified">
                        <Menu.ItemLabel>
                            A long menu item label that wraps onto multiple
                            lines
                        </Menu.ItemLabel>
                        <Menu.ItemDescription>
                            This deliberately long description should wrap below
                            the label without overlapping the suffix or
                            shortcut.
                        </Menu.ItemDescription>
                    </Menu.Item>
                    <Menu.SubmenuRoot>
                        <Menu.SubmenuTrigger prefix={<Menu.PrefixIcon icon={moveTo} />} suffix="Recent">
                            <Menu.ItemLabel>
                                A submenu trigger with a long label that wraps
                                onto multiple lines
                            </Menu.ItemLabel>
                        </Menu.SubmenuTrigger>
                        <Menu.Popup>
                            <Menu.Item>
                                <Menu.ItemLabel>Archive</Menu.ItemLabel>
                            </Menu.Item>
                        </Menu.Popup>
                    </Menu.SubmenuRoot>
                    <Menu.Item>
                        <Menu.ItemLabel>
                            An item with more than one description
                        </Menu.ItemLabel>
                        <Menu.ItemDescription>
                            The first description wraps, and stays clear of the
                            label above it.
                        </Menu.ItemDescription>
                        <Menu.ItemDescription>
                            A second description sits below the first with the
                            same gap.
                        </Menu.ItemDescription>
                    </Menu.Item>
                    <Menu.Item disabled shortcut={SHORTCUTS.downloads}>
                        <Menu.ItemLabel>
                            A disabled item with a long label that wraps onto
                            multiple lines
                        </Menu.ItemLabel>
                        <Menu.ItemDescription>
                            The disabled foreground treatment should apply to
                            the label, description, and shortcut.
                        </Menu.ItemDescription>
                    </Menu.Item>
                </Menu.Popup>
            </>
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Menu.Trigger>Open menu</Menu.Trigger>
                <Menu.Popup>
                    <Menu.Group>
                        <Menu.GroupLabel>File</Menu.GroupLabel>
                        <Menu.Item>
                            <Menu.ItemLabel>New draft</Menu.ItemLabel>
                        </Menu.Item>
                        <Menu.Item shortcut={SHORTCUTS.save}>
                            <Menu.ItemLabel>Save</Menu.ItemLabel>
                        </Menu.Item>
                        <Menu.Item suffix="Edited">
                            <Menu.ItemLabel>Save as copy…</Menu.ItemLabel>
                        </Menu.Item>
                    </Menu.Group>
                    <Menu.Separator />
                    <Menu.Group>
                        <Menu.GroupLabel>Organize</Menu.GroupLabel>
                        <Menu.Item prefix={<Menu.PrefixIcon icon={moveTo} />} shortcut={SHORTCUTS.move} suffix="3">
                            <Menu.ItemLabel>Move to collection…</Menu.ItemLabel>
                        </Menu.Item>
                        <Menu.Item prefix={<Menu.PrefixIcon icon={archive} />} suffix="12">
                            <Menu.ItemLabel>Archive</Menu.ItemLabel>
                        </Menu.Item>
                    </Menu.Group>
                </Menu.Popup>
            </>
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Menu.Trigger>Open menu</Menu.Trigger>
                <Menu.Popup>
                    <Menu.Item>
                        <Menu.ItemLabel>Rename…</Menu.ItemLabel>
                    </Menu.Item>
                    <Menu.SubmenuRoot>
                        <Menu.SubmenuTrigger shortcut={SHORTCUTS.move}>
                            <Menu.ItemLabel>
                                Move to another collection
                            </Menu.ItemLabel>
                        </Menu.SubmenuTrigger>
                        <Menu.Popup>
                            <Menu.Item>
                                <Menu.ItemLabel>Archive</Menu.ItemLabel>
                            </Menu.Item>
                            <Menu.Item>
                                <Menu.ItemLabel>Favorites</Menu.ItemLabel>
                            </Menu.Item>
                            <Menu.SubmenuRoot>
                                <Menu.SubmenuTrigger>
                                    <Menu.ItemLabel>
                                        More destinations
                                    </Menu.ItemLabel>
                                </Menu.SubmenuTrigger>
                                <Menu.Popup>
                                    <Menu.Item>
                                        <Menu.ItemLabel>
                                            Reviewed
                                        </Menu.ItemLabel>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Menu.ItemLabel>Shared</Menu.ItemLabel>
                                    </Menu.Item>
                                </Menu.Popup>
                            </Menu.SubmenuRoot>
                        </Menu.Popup>
                    </Menu.SubmenuRoot>
                    <Menu.Item>
                        <Menu.ItemLabel>Delete…</Menu.ItemLabel>
                    </Menu.Item>
                </Menu.Popup>
            </>
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [bookmarks, setBookmarks] = useState(true);
    const [downloads, setDownloads] = useState(false);
    const [archived, setArchived] = useState(true);
    const [shared, setShared] = useState(false);
    return <Menu.Root>
                <Menu.Trigger>Columns</Menu.Trigger>
                <Menu.Popup>
                    <Menu.Group>
                        <Menu.GroupLabel>Visible columns</Menu.GroupLabel>
                        <Menu.CheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
                            <Menu.ItemLabel>Bookmarks</Menu.ItemLabel>
                        </Menu.CheckboxItem>
                        <Menu.CheckboxItem checked={downloads} onCheckedChange={setDownloads} shortcut={SHORTCUTS.downloads}>
                            <Menu.ItemLabel>Downloads</Menu.ItemLabel>
                        </Menu.CheckboxItem>
                    </Menu.Group>
                    <Menu.Separator />
                    <Menu.Group>
                        <Menu.GroupLabel>Saved areas</Menu.GroupLabel>
                        <Menu.CheckboxItem checked={archived} onCheckedChange={setArchived} prefix={<Menu.PrefixIcon icon={archive} />}>
                            <Menu.ItemLabel>Archived</Menu.ItemLabel>
                        </Menu.CheckboxItem>
                        <Menu.CheckboxItem checked={shared} onCheckedChange={setShared} prefix={<Menu.PrefixIcon icon={share} />} shortcut={SHORTCUTS.shared}>
                            <Menu.ItemLabel>Shared</Menu.ItemLabel>
                        </Menu.CheckboxItem>
                    </Menu.Group>
                </Menu.Popup>
            </Menu.Root>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [alignment, setAlignment] = useState('left');
    const [density, setDensity] = useState('comfortable');
    return <Menu.Root>
                <Menu.Trigger>View options</Menu.Trigger>
                <Menu.Popup>
                    <Menu.RadioGroup value={alignment} onValueChange={setAlignment}>
                        <Menu.GroupLabel>Alignment</Menu.GroupLabel>
                        <Menu.RadioItem value="left" prefix={<Menu.PrefixIcon icon={alignLeft} />}>
                            <Menu.ItemLabel>Left</Menu.ItemLabel>
                        </Menu.RadioItem>
                        <Menu.RadioItem value="center" prefix={<Menu.PrefixIcon icon={alignCenter} />}>
                            <Menu.ItemLabel>Center</Menu.ItemLabel>
                        </Menu.RadioItem>
                        <Menu.RadioItem value="right" prefix={<Menu.PrefixIcon icon={alignRight} />}>
                            <Menu.ItemLabel>Right</Menu.ItemLabel>
                        </Menu.RadioItem>
                    </Menu.RadioGroup>
                    <Menu.Item>
                        <Menu.ItemLabel>Reset alignment</Menu.ItemLabel>
                    </Menu.Item>
                    <Menu.Separator />
                    <Menu.RadioGroup value={density} onValueChange={setDensity}>
                        <Menu.GroupLabel>Density</Menu.GroupLabel>
                        <Menu.RadioItem value="compact">
                            <Menu.ItemLabel>Compact</Menu.ItemLabel>
                        </Menu.RadioItem>
                        <Menu.RadioItem value="comfortable" shortcut={SHORTCUTS.comfortableDensity}>
                            <Menu.ItemLabel>Comfortable</Menu.ItemLabel>
                        </Menu.RadioItem>
                        <Menu.RadioItem value="spacious">
                            <Menu.ItemLabel>Spacious</Menu.ItemLabel>
                        </Menu.RadioItem>
                    </Menu.RadioGroup>
                </Menu.Popup>
            </Menu.Root>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Menu.Trigger>Open menu</Menu.Trigger>
                <Menu.Popup positioner={<Menu.Positioner side="right" align="start" />}>
                    <Menu.Item>
                        <Menu.ItemLabel>Duplicate</Menu.ItemLabel>
                    </Menu.Item>
                    <Menu.Item>
                        <Menu.ItemLabel>Move</Menu.ItemLabel>
                    </Menu.Item>
                </Menu.Popup>
            </>
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'With Custom z-index',
  args: {
    children: [<Menu.Trigger key="trigger">Open menu</Menu.Trigger>, <Menu.Popup portal={<Menu.Portal style={{
      '--wp-ui-menu-z-index': '9999'
    }} />} key="popup">
                <Menu.Item>
                    <Menu.ItemLabel>Duplicate</Menu.ItemLabel>
                </Menu.Item>
                <Menu.Item>
                    <Menu.ItemLabel>Move…</Menu.ItemLabel>
                </Menu.Item>
            </Menu.Popup>]
  }
}`,...$.parameters?.docs?.source},description:{story:"Popovers in Gutenberg are managed with explicit z-index values, which can\ncreate situations where a menu renders below another popover when you want\nit above.\n\nThe `--wp-ui-menu-z-index` CSS variable controls the z-index of the Menu\npositioner. Override it either:\n\n- **Globally**, by setting the variable on `:root` or `body` (raises every\n  Menu popup in the page), or\n- **Per instance**, by passing a `Menu.Portal` with a `style` (or\n  `className`) to `Menu.Popup`'s `portal` prop. The variable cascades from\n  the portal wrapper to everything rendered inside it.\n\nThis story demonstrates the per-instance approach.",...$.parameters?.docs?.description}}}})))()}init_index_story();export{X as CheckboxItems,W as Default,J as GroupedItems,G as LinkItem,Q as Positioning,Z as RadioItems,K as RichItems,Y as Submenu,$ as WithCustomZIndex,q as WrappedItems,Fe as default};