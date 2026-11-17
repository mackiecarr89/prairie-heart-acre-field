import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, c as GitBranch, d as Copy, f as Bug, i as Shuffle, l as Files, o as RotateCcw, p as Braces, r as SwatchBook, s as Palette, t as Upload, u as Download } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CyNg9ooG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var VSCODE_COLORS = [
	{
		"section": "Contrast colors",
		"id": "contrastActiveBorder",
		"desc": "An extra border around active elements to separate them from others for greater contrast."
	},
	{
		"section": "Contrast colors",
		"id": "contrastBorder",
		"desc": "An extra border around elements to separate them from others for greater contrast."
	},
	{
		"section": "Base colors",
		"id": "focusBorder",
		"desc": "Overall border color for focused elements. This color is only used if not overridden by a component."
	},
	{
		"section": "Base colors",
		"id": "foreground",
		"desc": "Overall foreground color. This color is only used if not overridden by a component."
	},
	{
		"section": "Base colors",
		"id": "disabledForeground",
		"desc": "Overall foreground for disabled elements. This color is only used if not overridden by a component."
	},
	{
		"section": "Base colors",
		"id": "widget.border",
		"desc": "Border color of widgets such as Find/Replace inside the editor."
	},
	{
		"section": "Base colors",
		"id": "widget.shadow",
		"desc": "Shadow color of widgets such as Find/Replace inside the editor."
	},
	{
		"section": "Base colors",
		"id": "selection.background",
		"desc": "Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal)."
	},
	{
		"section": "Base colors",
		"id": "descriptionForeground",
		"desc": "Foreground color for description text providing additional information, for example for a label."
	},
	{
		"section": "Base colors",
		"id": "errorForeground",
		"desc": "Overall foreground color for error messages (this color is only used if not overridden by a component)."
	},
	{
		"section": "Base colors",
		"id": "icon.foreground",
		"desc": "The default color for icons in the workbench."
	},
	{
		"section": "Base colors",
		"id": "sash.hoverBorder",
		"desc": "The hover border color for draggable sashes."
	},
	{
		"section": "Window border",
		"id": "window.activeBorder",
		"desc": "Border color for the active (focused) window."
	},
	{
		"section": "Window border",
		"id": "window.inactiveBorder",
		"desc": "Border color for the inactive (unfocused) windows."
	},
	{
		"section": "Modern UI colors",
		"id": "surface.background",
		"desc": "Background color of framed container surfaces (\"cards\"), such as the floating workbench panels in the modern layout."
	},
	{
		"section": "Modern UI colors",
		"id": "surface.foreground",
		"desc": "Foreground color of framed container surfaces (\"cards\"), such as the floating workbench panels in the modern layout."
	},
	{
		"section": "Modern UI colors",
		"id": "surface.border",
		"desc": "Border color of framed container surfaces (\"cards\"), such as the floating workbench panels in the modern layout."
	},
	{
		"section": "Modern UI colors",
		"id": "editor.border",
		"desc": "Border color of the editor surface in the modern layout."
	},
	{
		"section": "Modern UI colors",
		"id": "modernPanel.border",
		"desc": "Border color of the panel surface when the modern UI is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernSash.gripForeground",
		"desc": "Color of the grip handles marking the resizable boundaries between workbench parts when the modern UI is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernTab.activeBackground",
		"desc": "Background color of active tabs when the modern tab style is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernTab.activeForeground",
		"desc": "Foreground color of active tabs when the modern tab style is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernTab.hoverBackground",
		"desc": "Background color of tabs when hovering and the modern tab style is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernTab.hoverForeground",
		"desc": "Foreground color of tabs when hovering and the modern tab style is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernEditorTab.activeBackground",
		"desc": "Background color of active editor tabs when the modern tab style is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernEditorTab.activeActionBackground",
		"desc": "Opaque background color of tab actions on active editor tabs when the modern tab style is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernEditorTab.activeForeground",
		"desc": "Foreground color of active editor tabs when the modern tab style is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernEditorTab.inactiveBackground",
		"desc": "Background color of inactive editor tabs when the modern tab style is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernEditorTab.hoverBackground",
		"desc": "Background color of editor tabs when hovering and the modern tab style is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernEditorTab.hoverActionBackground",
		"desc": "Opaque background color of tab actions on editor tabs when hovering and the modern tab style is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernEditorTab.hoverForeground",
		"desc": "Foreground color of editor tabs when hovering and the modern tab style is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernEditorTab.activeHoverBackground",
		"desc": "Background color of active editor tabs when hovering and the modern tab style is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernEditorTab.activeHoverActionBackground",
		"desc": "Opaque background color of tab actions on active editor tabs when hovering and the modern tab style is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernEditorTab.selectedActionBackground",
		"desc": "Opaque background color of tab actions on selected editor tabs when the modern tab style is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernActivityBar.background",
		"desc": "Background color of the Activity Bar in the default side position when the modern UI is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernActivityBar.inactiveBackground",
		"desc": "Background color of the Activity Bar in an inactive window when it is in the default side position and the modern UI is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernActivityBarItem.activeBackground",
		"desc": "Background color of active Activity Bar items in the default side position when the modern UI is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernActivityBarItem.activeForeground",
		"desc": "Foreground color of active Activity Bar items in the default side position when the modern UI is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernActivityBarItem.hoverBackground",
		"desc": "Background color of Activity Bar items in the default side position when hovering and the modern UI is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernActivityBarItem.hoverForeground",
		"desc": "Foreground color of Activity Bar items in the default side position when hovering and the modern UI is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernActivityBar.border",
		"desc": "Border color of the Activity Bar in the default side position when the modern UI is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernUI.shellBackground",
		"desc": "Background color of the shell visible around floating workbench surfaces when the modern UI is enabled."
	},
	{
		"section": "Modern UI colors",
		"id": "modernUI.inactiveShellBackground",
		"desc": "Background color of the shell visible around floating workbench surfaces when the window is inactive and the modern UI is enabled."
	},
	{
		"section": "Text colors",
		"id": "textBlockQuote.background",
		"desc": "Background color for block quotes in text."
	},
	{
		"section": "Text colors",
		"id": "textBlockQuote.border",
		"desc": "Border color for block quotes in text."
	},
	{
		"section": "Text colors",
		"id": "textCodeBlock.background",
		"desc": "Background color for code blocks in text."
	},
	{
		"section": "Text colors",
		"id": "textLink.activeForeground",
		"desc": "Foreground color for links in text when clicked on and on mouse hover."
	},
	{
		"section": "Text colors",
		"id": "textLink.foreground",
		"desc": "Foreground color for links in text."
	},
	{
		"section": "Text colors",
		"id": "textPreformat.foreground",
		"desc": "Foreground color for preformatted text segments."
	},
	{
		"section": "Text colors",
		"id": "textPreformat.background",
		"desc": "Background color for preformatted text segments."
	},
	{
		"section": "Text colors",
		"id": "textPreformat.border",
		"desc": "Border color for preformatted text segments."
	},
	{
		"section": "Text colors",
		"id": "textSeparator.foreground",
		"desc": "Color for text separators."
	},
	{
		"section": "Action colors",
		"id": "toolbar.hoverBackground",
		"desc": "Toolbar background when hovering over actions using the mouse"
	},
	{
		"section": "Action colors",
		"id": "toolbar.hoverOutline",
		"desc": "Toolbar outline when hovering over actions using the mouse"
	},
	{
		"section": "Action colors",
		"id": "toolbar.activeBackground",
		"desc": "Toolbar background when holding the mouse over actions"
	},
	{
		"section": "Action colors",
		"id": "editorActionList.background",
		"desc": "Action List background color."
	},
	{
		"section": "Action colors",
		"id": "editorActionList.foreground",
		"desc": "Action List foreground color."
	},
	{
		"section": "Action colors",
		"id": "editorActionList.focusForeground",
		"desc": "Action List foreground color for the focused item."
	},
	{
		"section": "Action colors",
		"id": "editorActionList.focusBackground",
		"desc": "Action List background color for the focused item."
	},
	{
		"section": "Button control",
		"id": "button.background",
		"desc": "Button background color."
	},
	{
		"section": "Button control",
		"id": "button.foreground",
		"desc": "Button foreground color."
	},
	{
		"section": "Button control",
		"id": "button.border",
		"desc": "Button border color."
	},
	{
		"section": "Button control",
		"id": "button.separator",
		"desc": "Button separator color."
	},
	{
		"section": "Button control",
		"id": "button.hoverBackground",
		"desc": "Button background color when hovering."
	},
	{
		"section": "Button control",
		"id": "button.secondaryForeground",
		"desc": "Secondary button foreground color."
	},
	{
		"section": "Button control",
		"id": "button.secondaryBackground",
		"desc": "Secondary button background color."
	},
	{
		"section": "Button control",
		"id": "button.secondaryHoverBackground",
		"desc": "Secondary button background color when hovering."
	},
	{
		"section": "Button control",
		"id": "button.secondaryBorder",
		"desc": "Secondary button border color."
	},
	{
		"section": "Button control",
		"id": "checkbox.background",
		"desc": "Background color of checkbox widget."
	},
	{
		"section": "Button control",
		"id": "checkbox.foreground",
		"desc": "Foreground color of checkbox widget."
	},
	{
		"section": "Button control",
		"id": "checkbox.disabled.background",
		"desc": "Background of a disabled checkbox."
	},
	{
		"section": "Button control",
		"id": "checkbox.disabled.foreground",
		"desc": "Foreground of a disabled checkbox."
	},
	{
		"section": "Button control",
		"id": "checkbox.border",
		"desc": "Border color of checkbox widget."
	},
	{
		"section": "Button control",
		"id": "checkbox.selectBackground",
		"desc": "Background color of checkbox widget when the element it's in is selected."
	},
	{
		"section": "Button control",
		"id": "checkbox.selectBorder",
		"desc": "Border color of checkbox widget when the element it's in is selected."
	},
	{
		"section": "Button control",
		"id": "radio.activeForeground",
		"desc": "Foreground color of active radio option."
	},
	{
		"section": "Button control",
		"id": "radio.activeBackground",
		"desc": "Background color of active radio option."
	},
	{
		"section": "Button control",
		"id": "radio.activeBorder",
		"desc": "Border color of the active radio option."
	},
	{
		"section": "Button control",
		"id": "radio.inactiveForeground",
		"desc": "Foreground color of inactive radio option."
	},
	{
		"section": "Button control",
		"id": "radio.inactiveBackground",
		"desc": "Background color of inactive radio option."
	},
	{
		"section": "Button control",
		"id": "radio.inactiveBorder",
		"desc": "Border color of the inactive radio option."
	},
	{
		"section": "Button control",
		"id": "radio.inactiveHoverBackground",
		"desc": "Background color of inactive active radio option when hovering."
	},
	{
		"section": "Dropdown control",
		"id": "dropdown.background",
		"desc": "Dropdown background."
	},
	{
		"section": "Dropdown control",
		"id": "dropdown.listBackground",
		"desc": "Dropdown list background."
	},
	{
		"section": "Dropdown control",
		"id": "dropdown.border",
		"desc": "Dropdown border."
	},
	{
		"section": "Dropdown control",
		"id": "dropdown.foreground",
		"desc": "Dropdown foreground."
	},
	{
		"section": "Input control",
		"id": "input.background",
		"desc": "Input box background."
	},
	{
		"section": "Input control",
		"id": "input.border",
		"desc": "Input box border."
	},
	{
		"section": "Input control",
		"id": "input.foreground",
		"desc": "Input box foreground."
	},
	{
		"section": "Input control",
		"id": "input.placeholderForeground",
		"desc": "Input box foreground color for placeholder text."
	},
	{
		"section": "Input control",
		"id": "inputOption.activeBackground",
		"desc": "Background color of activated options in input fields."
	},
	{
		"section": "Input control",
		"id": "inputOption.activeBorder",
		"desc": "Border color of activated options in input fields."
	},
	{
		"section": "Input control",
		"id": "inputOption.activeForeground",
		"desc": "Foreground color of activated options in input fields."
	},
	{
		"section": "Input control",
		"id": "inputOption.hoverBackground",
		"desc": "Background color of activated options in input fields."
	},
	{
		"section": "Input control",
		"id": "inputValidation.errorBackground",
		"desc": "Input validation background color for error severity."
	},
	{
		"section": "Input control",
		"id": "inputValidation.errorForeground",
		"desc": "Input validation foreground color for error severity."
	},
	{
		"section": "Input control",
		"id": "inputValidation.errorBorder",
		"desc": "Input validation border color for error severity."
	},
	{
		"section": "Input control",
		"id": "inputValidation.infoBackground",
		"desc": "Input validation background color for information severity."
	},
	{
		"section": "Input control",
		"id": "inputValidation.infoForeground",
		"desc": "Input validation foreground color for information severity."
	},
	{
		"section": "Input control",
		"id": "inputValidation.infoBorder",
		"desc": "Input validation border color for information severity."
	},
	{
		"section": "Input control",
		"id": "inputValidation.warningBackground",
		"desc": "Input validation background color for information warning."
	},
	{
		"section": "Input control",
		"id": "inputValidation.warningForeground",
		"desc": "Input validation foreground color for warning severity."
	},
	{
		"section": "Input control",
		"id": "inputValidation.warningBorder",
		"desc": "Input validation border color for warning severity."
	},
	{
		"section": "Scrollbar control",
		"id": "scrollbar.background",
		"desc": "Scrollbar track background color."
	},
	{
		"section": "Scrollbar control",
		"id": "scrollbar.shadow",
		"desc": "Scrollbar slider shadow to indicate that the view is scrolled."
	},
	{
		"section": "Scrollbar control",
		"id": "scrollbarSlider.activeBackground",
		"desc": "Scrollbar slider background color when clicked on."
	},
	{
		"section": "Scrollbar control",
		"id": "scrollbarSlider.background",
		"desc": "Scrollbar slider background color."
	},
	{
		"section": "Scrollbar control",
		"id": "scrollbarSlider.hoverBackground",
		"desc": "Scrollbar slider background color when hovering."
	},
	{
		"section": "Badge",
		"id": "badge.foreground",
		"desc": "Badge foreground color."
	},
	{
		"section": "Badge",
		"id": "badge.background",
		"desc": "Badge background color."
	},
	{
		"section": "Progress bar",
		"id": "progressBar.background",
		"desc": "Background color of the progress bar shown for long running operations."
	},
	{
		"section": "Lists and trees",
		"id": "list.activeSelectionBackground",
		"desc": "List/Tree background color for the selected item when the list/tree is active."
	},
	{
		"section": "Lists and trees",
		"id": "list.activeSelectionForeground",
		"desc": "List/Tree foreground color for the selected item when the list/tree is active."
	},
	{
		"section": "Lists and trees",
		"id": "list.activeSelectionIconForeground",
		"desc": "List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not."
	},
	{
		"section": "Lists and trees",
		"id": "list.dropBackground",
		"desc": "List/Tree drag and drop background when moving items around using the mouse."
	},
	{
		"section": "Lists and trees",
		"id": "list.focusBackground",
		"desc": "List/Tree background color for the focused item when the list/tree is active."
	},
	{
		"section": "Lists and trees",
		"id": "list.focusForeground",
		"desc": "List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not."
	},
	{
		"section": "Lists and trees",
		"id": "list.focusHighlightForeground",
		"desc": "List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree."
	},
	{
		"section": "Lists and trees",
		"id": "list.focusOutline",
		"desc": "List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not."
	},
	{
		"section": "Lists and trees",
		"id": "list.focusAndSelectionOutline",
		"desc": "List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not."
	},
	{
		"section": "Lists and trees",
		"id": "list.highlightForeground",
		"desc": "List/Tree foreground color of the match highlights when searching inside the list/tree."
	},
	{
		"section": "Lists and trees",
		"id": "list.hoverBackground",
		"desc": "List/Tree background when hovering over items using the mouse."
	},
	{
		"section": "Lists and trees",
		"id": "list.hoverForeground",
		"desc": "List/Tree foreground when hovering over items using the mouse."
	},
	{
		"section": "Lists and trees",
		"id": "list.inactiveSelectionBackground",
		"desc": "List/Tree background color for the selected item when the list/tree is inactive."
	},
	{
		"section": "Lists and trees",
		"id": "list.inactiveSelectionForeground",
		"desc": "List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not."
	},
	{
		"section": "Lists and trees",
		"id": "list.inactiveSelectionIconForeground",
		"desc": "List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not."
	},
	{
		"section": "Lists and trees",
		"id": "list.inactiveFocusBackground",
		"desc": "List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists."
	},
	{
		"section": "Lists and trees",
		"id": "list.inactiveFocusOutline",
		"desc": "List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not."
	},
	{
		"section": "Lists and trees",
		"id": "list.invalidItemForeground",
		"desc": "List/Tree foreground color for invalid items, for example an unresolved root in explorer."
	},
	{
		"section": "Lists and trees",
		"id": "list.errorForeground",
		"desc": "Foreground color of list items containing errors."
	},
	{
		"section": "Lists and trees",
		"id": "list.warningForeground",
		"desc": "Foreground color of list items containing warnings."
	},
	{
		"section": "Lists and trees",
		"id": "listFilterWidget.background",
		"desc": "List/Tree Filter background color of typed text when searching inside the list/tree."
	},
	{
		"section": "Lists and trees",
		"id": "listFilterWidget.outline",
		"desc": "List/Tree Filter Widget's outline color of typed text when searching inside the list/tree."
	},
	{
		"section": "Lists and trees",
		"id": "listFilterWidget.noMatchesOutline",
		"desc": "List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree."
	},
	{
		"section": "Lists and trees",
		"id": "listFilterWidget.shadow",
		"desc": "Shadow color of the type filter widget in lists and tree."
	},
	{
		"section": "Lists and trees",
		"id": "list.filterMatchBackground",
		"desc": "Background color of the filtered matches in lists and trees."
	},
	{
		"section": "Lists and trees",
		"id": "list.filterMatchBorder",
		"desc": "Border color of the filtered matches in lists and trees."
	},
	{
		"section": "Lists and trees",
		"id": "list.deemphasizedForeground",
		"desc": "List/Tree foreground color for items that are deemphasized."
	},
	{
		"section": "Lists and trees",
		"id": "list.dropBetweenBackground",
		"desc": "List/Tree drag and drop border color when moving items between items when using the mouse."
	},
	{
		"section": "Lists and trees",
		"id": "tree.indentGuidesStroke",
		"desc": "Tree Widget's stroke color for indent guides."
	},
	{
		"section": "Lists and trees",
		"id": "tree.inactiveIndentGuidesStroke",
		"desc": "Tree stroke color for the indentation guides that are not active."
	},
	{
		"section": "Lists and trees",
		"id": "tree.tableColumnsBorder",
		"desc": "Tree stroke color for the indentation guides."
	},
	{
		"section": "Lists and trees",
		"id": "tree.tableOddRowsBackground",
		"desc": "Background color for odd table rows."
	},
	{
		"section": "Activity Bar",
		"id": "activityBar.background",
		"desc": "Activity Bar background color."
	},
	{
		"section": "Activity Bar",
		"id": "activityBar.dropBorder",
		"desc": "Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar."
	},
	{
		"section": "Activity Bar",
		"id": "activityBar.foreground",
		"desc": "Activity Bar foreground color (for example used for the icons)."
	},
	{
		"section": "Activity Bar",
		"id": "activityBar.inactiveForeground",
		"desc": "Activity Bar item foreground color when it is inactive."
	},
	{
		"section": "Activity Bar",
		"id": "activityBar.border",
		"desc": "Activity Bar border color with the Side Bar."
	},
	{
		"section": "Activity Bar",
		"id": "activityBarBadge.background",
		"desc": "Activity notification badge background color."
	},
	{
		"section": "Activity Bar",
		"id": "activityBarBadge.foreground",
		"desc": "Activity notification badge foreground color."
	},
	{
		"section": "Activity Bar",
		"id": "activityBar.activeBorder",
		"desc": "Activity Bar active indicator border color."
	},
	{
		"section": "Activity Bar",
		"id": "activityBar.activeBackground",
		"desc": "Activity Bar optional background color for the active element."
	},
	{
		"section": "Activity Bar",
		"id": "activityBar.activeFocusBorder",
		"desc": "Activity bar focus border color for the active item."
	},
	{
		"section": "Activity Bar",
		"id": "activityBarTop.foreground",
		"desc": "Active foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar."
	},
	{
		"section": "Activity Bar",
		"id": "activityBarTop.activeBorder",
		"desc": "Focus border color for the active item in the Activity bar when it is on top. The activity allows to switch between views of the side bar."
	},
	{
		"section": "Activity Bar",
		"id": "activityBarTop.inactiveForeground",
		"desc": "Inactive foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar."
	},
	{
		"section": "Activity Bar",
		"id": "activityBarTop.dropBorder",
		"desc": "Drag and drop feedback color for the items in the Activity bar when it is on top. The activity allows to switch between views of the side bar."
	},
	{
		"section": "Activity Bar",
		"id": "activityBarTop.background",
		"desc": "Background color of the activity bar when set to top / bottom."
	},
	{
		"section": "Activity Bar",
		"id": "activityBarTop.activeBackground",
		"desc": "Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar."
	},
	{
		"section": "Activity Bar",
		"id": "activityWarningBadge.foreground",
		"desc": "Foreground color of the warning activity badge"
	},
	{
		"section": "Activity Bar",
		"id": "activityWarningBadge.background",
		"desc": "Background color of the warning activity badge"
	},
	{
		"section": "Activity Bar",
		"id": "activityErrorBadge.foreground",
		"desc": "Foreground color of the error activity badge"
	},
	{
		"section": "Activity Bar",
		"id": "activityErrorBadge.background",
		"desc": "Background color of the error activity badge"
	},
	{
		"section": "Profiles",
		"id": "profileBadge.background",
		"desc": "Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar."
	},
	{
		"section": "Profiles",
		"id": "profileBadge.foreground",
		"desc": "Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar."
	},
	{
		"section": "Profiles",
		"id": "profiles.sashBorder",
		"desc": "The color of the Profiles editor splitview sash border."
	},
	{
		"section": "Side Bar",
		"id": "sideBar.background",
		"desc": "Side Bar background color."
	},
	{
		"section": "Side Bar",
		"id": "sideBar.foreground",
		"desc": "Side Bar foreground color. The Side Bar is the container for views like Explorer and Search."
	},
	{
		"section": "Side Bar",
		"id": "sideBar.border",
		"desc": "Side Bar border color on the side separating the editor."
	},
	{
		"section": "Side Bar",
		"id": "sideBar.dropBackground",
		"desc": "Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through."
	},
	{
		"section": "Side Bar",
		"id": "sideBarTitle.foreground",
		"desc": "Side Bar title foreground color."
	},
	{
		"section": "Side Bar",
		"id": "sideBarSectionHeader.background",
		"desc": "Side Bar section header background color."
	},
	{
		"section": "Side Bar",
		"id": "sideBarSectionHeader.foreground",
		"desc": "Side Bar section header foreground color."
	},
	{
		"section": "Side Bar",
		"id": "sideBarSectionHeader.border",
		"desc": "Side bar section header border color."
	},
	{
		"section": "Side Bar",
		"id": "sideBarActivityBarTop.border",
		"desc": "Border color between the activity bar at the top/bottom and the views."
	},
	{
		"section": "Side Bar",
		"id": "sideBarTitle.background",
		"desc": "Side bar title background color. The side bar is the container for views like explorer and search."
	},
	{
		"section": "Side Bar",
		"id": "sideBarTitle.border",
		"desc": "Side bar title border color on the bottom, separating the title from the views. The side bar is the container for views like explorer and search."
	},
	{
		"section": "Side Bar",
		"id": "sideBarStickyScroll.background",
		"desc": "Background color of sticky scroll in the side bar."
	},
	{
		"section": "Side Bar",
		"id": "sideBarStickyScroll.border",
		"desc": "Border color of sticky scroll in the side bar."
	},
	{
		"section": "Side Bar",
		"id": "sideBarStickyScroll.shadow",
		"desc": "Shadow color of sticky scroll in the side bar."
	},
	{
		"section": "Minimap",
		"id": "minimap.findMatchHighlight",
		"desc": "Highlight color for matches from search within files."
	},
	{
		"section": "Minimap",
		"id": "minimap.selectionHighlight",
		"desc": "Highlight color for the editor selection."
	},
	{
		"section": "Minimap",
		"id": "minimap.errorHighlight",
		"desc": "Highlight color for errors within the editor."
	},
	{
		"section": "Minimap",
		"id": "minimap.warningHighlight",
		"desc": "Highlight color for warnings within the editor."
	},
	{
		"section": "Minimap",
		"id": "minimap.background",
		"desc": "Minimap background color."
	},
	{
		"section": "Minimap",
		"id": "minimap.selectionOccurrenceHighlight",
		"desc": "Minimap marker color for repeating editor selections."
	},
	{
		"section": "Minimap",
		"id": "minimap.foregroundOpacity",
		"desc": "Opacity of foreground elements rendered in the minimap. For example, \"#000000c0\" will render the elements with 75% opacity."
	},
	{
		"section": "Minimap",
		"id": "minimap.infoHighlight",
		"desc": "Minimap marker color for infos."
	},
	{
		"section": "Minimap",
		"id": "minimap.chatEditHighlight",
		"desc": "Color of pending edit regions in the minimap."
	},
	{
		"section": "Minimap",
		"id": "minimapSlider.background",
		"desc": "Minimap slider background color."
	},
	{
		"section": "Minimap",
		"id": "minimapSlider.hoverBackground",
		"desc": "Minimap slider background color when hovering."
	},
	{
		"section": "Minimap",
		"id": "minimapSlider.activeBackground",
		"desc": "Minimap slider background color when clicked on."
	},
	{
		"section": "Minimap",
		"id": "minimapGutter.addedBackground",
		"desc": "Minimap gutter color for added content."
	},
	{
		"section": "Minimap",
		"id": "minimapGutter.modifiedBackground",
		"desc": "Minimap gutter color for modified content."
	},
	{
		"section": "Minimap",
		"id": "minimapGutter.deletedBackground",
		"desc": "Minimap gutter color for deleted content."
	},
	{
		"section": "Minimap",
		"id": "editorMinimap.inlineChatInserted",
		"desc": "Minimap marker color for inline chat inserted content."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "editorGroup.border",
		"desc": "Color to separate multiple editor groups from each other."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "editorGroup.dropBackground",
		"desc": "Background color when dragging editors around."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "editorGroupHeader.noTabsBackground",
		"desc": "Background color of the editor group title header when using single Tab (set `\"workbench.editor.showTabs\": \"single\"`)."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "editorGroupHeader.tabsBackground",
		"desc": "Background color of the Tabs container."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "editorGroupHeader.tabsBorder",
		"desc": "Border color below the editor tabs control when tabs are enabled."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "editorGroupHeader.border",
		"desc": "Border color between editor group header and editor (below breadcrumbs if enabled)."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "editorGroup.emptyBackground",
		"desc": "Background color of an empty editor group."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "editorGroup.focusedEmptyBorder",
		"desc": "Border color of an empty editor group that is focused."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "editorGroup.dropIntoPromptForeground",
		"desc": "Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "editorGroup.dropIntoPromptBackground",
		"desc": "Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "editorGroup.dropIntoPromptBorder",
		"desc": "Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.activeBackground",
		"desc": "Active Tab background color in an active group."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.unfocusedActiveBackground",
		"desc": "Active Tab background color in an inactive editor group."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.activeForeground",
		"desc": "Active Tab foreground color in an active group."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.border",
		"desc": "Border to separate Tabs from each other."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.activeBorder",
		"desc": "Bottom border for the active tab."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.selectedBorderTop",
		"desc": "Border to the top of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.selectedBackground",
		"desc": "Background of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.selectedForeground",
		"desc": "Foreground of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.dragAndDropBorder",
		"desc": "Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.unfocusedActiveBorder",
		"desc": "Bottom border for the active tab in an inactive editor group."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.activeBorderTop",
		"desc": "Top border for the active tab."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.unfocusedActiveBorderTop",
		"desc": "Top border for the active tab in an inactive editor group"
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.lastPinnedBorder",
		"desc": "Border on the right of the last pinned editor to separate from unpinned editors."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.inactiveBackground",
		"desc": "Inactive Tab background color."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.unfocusedInactiveBackground",
		"desc": "Inactive Tab background color in an unfocused group"
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.inactiveForeground",
		"desc": "Inactive Tab foreground color in an active group."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.unfocusedActiveForeground",
		"desc": "Active tab foreground color in an inactive editor group."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.unfocusedInactiveForeground",
		"desc": "Inactive tab foreground color in an inactive editor group."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.hoverBackground",
		"desc": "Tab background color when hovering"
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.unfocusedHoverBackground",
		"desc": "Tab background color in an unfocused group when hovering"
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.hoverForeground",
		"desc": "Tab foreground color when hovering"
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.unfocusedHoverForeground",
		"desc": "Tab foreground color in an unfocused group when hovering"
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.hoverBorder",
		"desc": "Border to highlight tabs when hovering"
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.unfocusedHoverBorder",
		"desc": "Border to highlight tabs in an unfocused group when hovering"
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.activeModifiedBorder",
		"desc": "Border on the top of modified (dirty) active tabs in an active group."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.inactiveModifiedBorder",
		"desc": "Border on the top of modified (dirty) inactive tabs in an active group."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.unfocusedActiveModifiedBorder",
		"desc": "Border on the top of modified (dirty) active tabs in an unfocused group."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "tab.unfocusedInactiveModifiedBorder",
		"desc": "Border on the top of modified (dirty) inactive tabs in an unfocused group."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "editorPane.background",
		"desc": "Background color of the editor pane visible on the left and right side of the centered editor layout."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "sideBySideEditor.horizontalBorder",
		"desc": "Color to separate two editors from each other when shown side by side in an editor group from top to bottom."
	},
	{
		"section": "Editor Groups & Tabs",
		"id": "sideBySideEditor.verticalBorder",
		"desc": "Color to separate two editors from each other when shown side by side in an editor group from left to right."
	},
	{
		"section": "Editor colors",
		"id": "editor.background",
		"desc": "Editor background color."
	},
	{
		"section": "Editor colors",
		"id": "editor.foreground",
		"desc": "Editor default foreground color."
	},
	{
		"section": "Editor colors",
		"id": "editorLineNumber.foreground",
		"desc": "Color of editor line numbers."
	},
	{
		"section": "Editor colors",
		"id": "editorLineNumber.activeForeground",
		"desc": "Color of the active editor line number."
	},
	{
		"section": "Editor colors",
		"id": "editorLineNumber.dimmedForeground",
		"desc": "Color of the final editor line when editor.renderFinalNewline is set to dimmed."
	},
	{
		"section": "Editor colors",
		"id": "editorCursor.background",
		"desc": "The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor."
	},
	{
		"section": "Editor colors",
		"id": "editorCursor.foreground",
		"desc": "Color of the editor cursor."
	},
	{
		"section": "Editor colors",
		"id": "editorMultiCursor.primary.foreground",
		"desc": "Color of the primary editor cursor when multiple cursors are present."
	},
	{
		"section": "Editor colors",
		"id": "editorMultiCursor.primary.background",
		"desc": "The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor."
	},
	{
		"section": "Editor colors",
		"id": "editorMultiCursor.secondary.foreground",
		"desc": "Color of secondary editor cursors when multiple cursors are present."
	},
	{
		"section": "Editor colors",
		"id": "editorMultiCursor.secondary.background",
		"desc": "The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor."
	},
	{
		"section": "Editor colors",
		"id": "editor.placeholder.foreground",
		"desc": "Foreground color of the placeholder text in the editor."
	},
	{
		"section": "Editor colors",
		"id": "editor.compositionBorder",
		"desc": "The border color for an IME composition."
	},
	{
		"section": "Editor colors",
		"id": "editor.selectionBackground",
		"desc": "Color of the editor selection."
	},
	{
		"section": "Editor colors",
		"id": "editor.selectionForeground",
		"desc": "Color of the selected text for high contrast."
	},
	{
		"section": "Editor colors",
		"id": "editor.inactiveSelectionBackground",
		"desc": "Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editor.selectionHighlightBackground",
		"desc": "Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editor.selectionHighlightBorder",
		"desc": "Border color for regions with the same content as the selection."
	},
	{
		"section": "Editor colors",
		"id": "editor.wordHighlightBackground",
		"desc": "Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editor.wordHighlightBorder",
		"desc": "Border color of a symbol during read-access, for example when reading a variable."
	},
	{
		"section": "Editor colors",
		"id": "editor.wordHighlightStrongBackground",
		"desc": "Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editor.wordHighlightStrongBorder",
		"desc": "Border color of a symbol during write-access, for example when writing to a variable."
	},
	{
		"section": "Editor colors",
		"id": "editor.wordHighlightTextBackground",
		"desc": "Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editor.wordHighlightTextBorder",
		"desc": "Border color of a textual occurrence for a symbol."
	},
	{
		"section": "Editor colors",
		"id": "editor.findMatchBackground",
		"desc": "Color of the current search match."
	},
	{
		"section": "Editor colors",
		"id": "editor.findMatchForeground",
		"desc": "Text color of the current search match."
	},
	{
		"section": "Editor colors",
		"id": "editor.findMatchHighlightForeground",
		"desc": "Foreground color of the other search matches."
	},
	{
		"section": "Editor colors",
		"id": "editor.findMatchHighlightBackground",
		"desc": "Color of the other search matches. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editor.findRangeHighlightBackground",
		"desc": "Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editor.findMatchBorder",
		"desc": "Border color of the current search match."
	},
	{
		"section": "Editor colors",
		"id": "editor.findMatchHighlightBorder",
		"desc": "Border color of the other search matches."
	},
	{
		"section": "Editor colors",
		"id": "editor.findRangeHighlightBorder",
		"desc": "Border color the range limiting the search (Enable 'Find in Selection' in the find widget)."
	},
	{
		"section": "Editor colors",
		"id": "search.resultsInfoForeground",
		"desc": "Color of the text in the search viewlet's completion message. For example, this color is used in the text that says \"`{x} results in {y} files`\"."
	},
	{
		"section": "Editor colors",
		"id": "searchEditor.findMatchBackground",
		"desc": "Color of the editor's results."
	},
	{
		"section": "Editor colors",
		"id": "searchEditor.findMatchBorder",
		"desc": "Border color of the editor's results."
	},
	{
		"section": "Editor colors",
		"id": "searchEditor.textInputBorder",
		"desc": "Search editor text input box border."
	},
	{
		"section": "Editor colors",
		"id": "editor.hoverHighlightBackground",
		"desc": "Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editor.lineHighlightBackground",
		"desc": "Background color for the highlight of line at the cursor position."
	},
	{
		"section": "Editor colors",
		"id": "editor.inactiveLineHighlightBackground",
		"desc": "Background color for the highlight of line at the cursor position when the editor is not focused."
	},
	{
		"section": "Editor colors",
		"id": "editor.lineHighlightBorder",
		"desc": "Background color for the border around the line at the cursor position."
	},
	{
		"section": "Editor colors",
		"id": "editorUnicodeHighlight.border",
		"desc": "Border color used to highlight unicode characters."
	},
	{
		"section": "Editor colors",
		"id": "editorUnicodeHighlight.background",
		"desc": "Background color used to highlight unicode characters."
	},
	{
		"section": "Editor colors",
		"id": "editorLink.activeForeground",
		"desc": "Color of active links."
	},
	{
		"section": "Editor colors",
		"id": "editor.rangeHighlightBackground",
		"desc": "Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editor.rangeHighlightBorder",
		"desc": "Background color of the border around highlighted ranges."
	},
	{
		"section": "Editor colors",
		"id": "editor.symbolHighlightBackground",
		"desc": "Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editor.symbolHighlightBorder",
		"desc": "Background color of the border around highlighted symbols."
	},
	{
		"section": "Editor colors",
		"id": "editorWhitespace.foreground",
		"desc": "Color of whitespace characters in the editor."
	},
	{
		"section": "Editor colors",
		"id": "editorIndentGuide.background",
		"desc": "Color of the editor indentation guides."
	},
	{
		"section": "Editor colors",
		"id": "editorIndentGuide.background1",
		"desc": "Color of the editor indentation guides (1)."
	},
	{
		"section": "Editor colors",
		"id": "editorIndentGuide.background2",
		"desc": "Color of the editor indentation guides (2)."
	},
	{
		"section": "Editor colors",
		"id": "editorIndentGuide.background3",
		"desc": "Color of the editor indentation guides (3)."
	},
	{
		"section": "Editor colors",
		"id": "editorIndentGuide.background4",
		"desc": "Color of the editor indentation guides (4)."
	},
	{
		"section": "Editor colors",
		"id": "editorIndentGuide.background5",
		"desc": "Color of the editor indentation guides (5)."
	},
	{
		"section": "Editor colors",
		"id": "editorIndentGuide.background6",
		"desc": "Color of the editor indentation guides (6)."
	},
	{
		"section": "Editor colors",
		"id": "editorIndentGuide.activeBackground",
		"desc": "Color of the active editor indentation guide."
	},
	{
		"section": "Editor colors",
		"id": "editorIndentGuide.activeBackground1",
		"desc": "Color of the active editor indentation guides (1)."
	},
	{
		"section": "Editor colors",
		"id": "editorIndentGuide.activeBackground2",
		"desc": "Color of the active editor indentation guides (2)."
	},
	{
		"section": "Editor colors",
		"id": "editorIndentGuide.activeBackground3",
		"desc": "Color of the active editor indentation guides (3)."
	},
	{
		"section": "Editor colors",
		"id": "editorIndentGuide.activeBackground4",
		"desc": "Color of the active editor indentation guides (4)."
	},
	{
		"section": "Editor colors",
		"id": "editorIndentGuide.activeBackground5",
		"desc": "Color of the active editor indentation guides (5)."
	},
	{
		"section": "Editor colors",
		"id": "editorIndentGuide.activeBackground6",
		"desc": "Color of the active editor indentation guides (6)."
	},
	{
		"section": "Editor colors",
		"id": "editorInlayHint.background",
		"desc": "Background color of inline hints."
	},
	{
		"section": "Editor colors",
		"id": "editorInlayHint.foreground",
		"desc": "Foreground color of inline hints."
	},
	{
		"section": "Editor colors",
		"id": "editorInlayHint.typeForeground",
		"desc": "Foreground color of inline hints for types"
	},
	{
		"section": "Editor colors",
		"id": "editorInlayHint.typeBackground",
		"desc": "Background color of inline hints for types"
	},
	{
		"section": "Editor colors",
		"id": "editorInlayHint.parameterForeground",
		"desc": "Foreground color of inline hints for parameters"
	},
	{
		"section": "Editor colors",
		"id": "editorInlayHint.parameterBackground",
		"desc": "Background color of inline hints for parameters"
	},
	{
		"section": "Editor colors",
		"id": "editorRuler.foreground",
		"desc": "Color of the editor rulers."
	},
	{
		"section": "Editor colors",
		"id": "editor.linkedEditingBackground",
		"desc": "Background color when the editor is in linked editing mode."
	},
	{
		"section": "Editor colors",
		"id": "editorCodeLens.foreground",
		"desc": "Foreground color of an editor CodeLens."
	},
	{
		"section": "Editor colors",
		"id": "editorLightBulb.foreground",
		"desc": "The color used for the lightbulb actions icon."
	},
	{
		"section": "Editor colors",
		"id": "editorLightBulbAutoFix.foreground",
		"desc": "The color used for the lightbulb auto fix actions icon."
	},
	{
		"section": "Editor colors",
		"id": "editorLightBulbAi.foreground",
		"desc": "The color used for the lightbulb AI icon."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketMatch.background",
		"desc": "Background color behind matching brackets."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketMatch.border",
		"desc": "Color for matching brackets boxes."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketMatch.foreground",
		"desc": "Foreground color for matching brackets."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketHighlight.foreground1",
		"desc": "Foreground color of brackets (1). Requires enabling bracket pair colorization."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketHighlight.foreground2",
		"desc": "Foreground color of brackets (2). Requires enabling bracket pair colorization."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketHighlight.foreground3",
		"desc": "Foreground color of brackets (3). Requires enabling bracket pair colorization."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketHighlight.foreground4",
		"desc": "Foreground color of brackets (4). Requires enabling bracket pair colorization."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketHighlight.foreground5",
		"desc": "Foreground color of brackets (5). Requires enabling bracket pair colorization."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketHighlight.foreground6",
		"desc": "Foreground color of brackets (6). Requires enabling bracket pair colorization."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketHighlight.unexpectedBracket.foreground",
		"desc": "Foreground color of unexpected brackets."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketPairGuide.activeBackground1",
		"desc": "Background color of active bracket pair guides (1). Requires enabling bracket pair guides."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketPairGuide.activeBackground2",
		"desc": "Background color of active bracket pair guides (2). Requires enabling bracket pair guides."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketPairGuide.activeBackground3",
		"desc": "Background color of active bracket pair guides (3). Requires enabling bracket pair guides."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketPairGuide.activeBackground4",
		"desc": "Background color of active bracket pair guides (4). Requires enabling bracket pair guides."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketPairGuide.activeBackground5",
		"desc": "Background color of active bracket pair guides (5). Requires enabling bracket pair guides."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketPairGuide.activeBackground6",
		"desc": "Background color of active bracket pair guides (6). Requires enabling bracket pair guides."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketPairGuide.background1",
		"desc": "Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketPairGuide.background2",
		"desc": "Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketPairGuide.background3",
		"desc": "Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketPairGuide.background4",
		"desc": "Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketPairGuide.background5",
		"desc": "Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides."
	},
	{
		"section": "Editor colors",
		"id": "editorBracketPairGuide.background6",
		"desc": "Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides."
	},
	{
		"section": "Editor colors",
		"id": "editor.foldBackground",
		"desc": "Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editor.foldPlaceholderForeground",
		"desc": "Color of the collapsed text after the first line of a folded range."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.background",
		"desc": "Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.border",
		"desc": "Color of the overview ruler border."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.findMatchForeground",
		"desc": "Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.rangeHighlightForeground",
		"desc": "Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.selectionHighlightForeground",
		"desc": "Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.wordHighlightForeground",
		"desc": "Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.wordHighlightStrongForeground",
		"desc": "Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.wordHighlightTextForeground",
		"desc": "Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.modifiedForeground",
		"desc": "Overview ruler marker color for modified content."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.addedForeground",
		"desc": "Overview ruler marker color for added content."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.deletedForeground",
		"desc": "Overview ruler marker color for deleted content."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.errorForeground",
		"desc": "Overview ruler marker color for errors."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.warningForeground",
		"desc": "Overview ruler marker color for warnings."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.infoForeground",
		"desc": "Overview ruler marker color for infos."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.bracketMatchForeground",
		"desc": "Overview ruler marker color for matching brackets."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.inlineChatInserted",
		"desc": "Overview ruler marker color for inline chat inserted content."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.inlineChatRemoved",
		"desc": "Overview ruler marker color for inline chat removed content."
	},
	{
		"section": "Editor colors",
		"id": "editorOverviewRuler.commentDraftForeground",
		"desc": "Editor overview ruler decoration color for comment threads with draft comments. This color should be opaque."
	},
	{
		"section": "Editor colors",
		"id": "editorError.foreground",
		"desc": "Foreground color of error squiggles in the editor."
	},
	{
		"section": "Editor colors",
		"id": "editorError.border",
		"desc": "Border color of error boxes in the editor."
	},
	{
		"section": "Editor colors",
		"id": "editorError.background",
		"desc": "Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editorWarning.foreground",
		"desc": "Foreground color of warning squiggles in the editor."
	},
	{
		"section": "Editor colors",
		"id": "editorWarning.border",
		"desc": "Border color of warning boxes in the editor."
	},
	{
		"section": "Editor colors",
		"id": "editorWarning.background",
		"desc": "Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editorInfo.foreground",
		"desc": "Foreground color of info squiggles in the editor."
	},
	{
		"section": "Editor colors",
		"id": "editorInfo.border",
		"desc": "Border color of info boxes in the editor."
	},
	{
		"section": "Editor colors",
		"id": "editorInfo.background",
		"desc": "Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Editor colors",
		"id": "editorHint.foreground",
		"desc": "Foreground color of hints in the editor."
	},
	{
		"section": "Editor colors",
		"id": "editorHint.border",
		"desc": "Border color of hint boxes in the editor."
	},
	{
		"section": "Editor colors",
		"id": "problemsErrorIcon.foreground",
		"desc": "The color used for the problems error icon."
	},
	{
		"section": "Editor colors",
		"id": "problemsWarningIcon.foreground",
		"desc": "The color used for the problems warning icon."
	},
	{
		"section": "Editor colors",
		"id": "problemsInfoIcon.foreground",
		"desc": "The color used for the problems info icon."
	},
	{
		"section": "Editor colors",
		"id": "editorUnnecessaryCode.border",
		"desc": "Border color of unnecessary (unused) source code in the editor."
	},
	{
		"section": "Editor colors",
		"id": "editorUnnecessaryCode.opacity",
		"desc": "Opacity of unnecessary (unused) source code in the editor. For example, `\"#000000c0\"` will render the code with 75% opacity. For high contrast themes, use the `\"editorUnnecessaryCode.border\"` theme color to underline unnecessary code instead of fading it out."
	},
	{
		"section": "Editor colors",
		"id": "editorGutter.background",
		"desc": "Background color of the editor gutter. The gutter contains the glyph margins and the line numbers."
	},
	{
		"section": "Editor colors",
		"id": "editorGutter.modifiedBackground",
		"desc": "Editor gutter background color for lines that are modified."
	},
	{
		"section": "Editor colors",
		"id": "editorGutter.modifiedSecondaryBackground",
		"desc": "Editor gutter secondary background color for lines that are modified."
	},
	{
		"section": "Editor colors",
		"id": "editorGutter.addedBackground",
		"desc": "Editor gutter background color for lines that are added."
	},
	{
		"section": "Editor colors",
		"id": "editorGutter.addedSecondaryBackground",
		"desc": "Editor gutter secondary background color for lines that are added."
	},
	{
		"section": "Editor colors",
		"id": "editorGutter.deletedBackground",
		"desc": "Editor gutter background color for lines that are deleted."
	},
	{
		"section": "Editor colors",
		"id": "editorGutter.deletedSecondaryBackground",
		"desc": "Editor gutter secondary background color for lines that are deleted."
	},
	{
		"section": "Editor colors",
		"id": "editorGutter.commentRangeForeground",
		"desc": "Editor gutter decoration color for commenting ranges."
	},
	{
		"section": "Editor colors",
		"id": "editorGutter.commentGlyphForeground",
		"desc": "Editor gutter decoration color for commenting glyphs."
	},
	{
		"section": "Editor colors",
		"id": "editorGutter.commentUnresolvedGlyphForeground",
		"desc": "Editor gutter decoration color for commenting glyphs for unresolved comment threads."
	},
	{
		"section": "Editor colors",
		"id": "editorGutter.foldingControlForeground",
		"desc": "Color of the folding control in the editor gutter."
	},
	{
		"section": "Editor colors",
		"id": "editorGutter.itemGlyphForeground",
		"desc": "Editor gutter decoration color for gutter item glyphs."
	},
	{
		"section": "Editor colors",
		"id": "editorGutter.itemBackground",
		"desc": "Editor gutter decoration color for gutter item background. This color should be opaque."
	},
	{
		"section": "Editor colors",
		"id": "editorGutter.commentDraftGlyphForeground",
		"desc": "Editor gutter decoration color for commenting glyphs for comment threads with draft comments."
	},
	{
		"section": "Editor colors",
		"id": "editorCommentsWidget.resolvedBorder",
		"desc": "Color of borders and arrow for resolved comments."
	},
	{
		"section": "Editor colors",
		"id": "editorCommentsWidget.unresolvedBorder",
		"desc": "Color of borders and arrow for unresolved comments."
	},
	{
		"section": "Editor colors",
		"id": "editorCommentsWidget.rangeBackground",
		"desc": "Color of background for comment ranges."
	},
	{
		"section": "Editor colors",
		"id": "editorCommentsWidget.rangeActiveBackground",
		"desc": "Color of background for currently selected or hovered comment range."
	},
	{
		"section": "Editor colors",
		"id": "editorCommentsWidget.replyInputBackground",
		"desc": "Background color for comment reply input box."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.gutterIndicator.primaryBorder",
		"desc": "Border color for the primary inline edit gutter indicator."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.gutterIndicator.primaryForeground",
		"desc": "Foreground color for the primary inline edit gutter indicator."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.gutterIndicator.primaryBackground",
		"desc": "Background color for the primary inline edit gutter indicator."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.gutterIndicator.secondaryBorder",
		"desc": "Border color for the secondary inline edit gutter indicator."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.gutterIndicator.secondaryForeground",
		"desc": "Foreground color for the secondary inline edit gutter indicator."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.gutterIndicator.secondaryBackground",
		"desc": "Background color for the secondary inline edit gutter indicator."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.gutterIndicator.successfulBorder",
		"desc": "Border color for the successful inline edit gutter indicator."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.gutterIndicator.successfulForeground",
		"desc": "Foreground color for the successful inline edit gutter indicator."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.gutterIndicator.successfulBackground",
		"desc": "Background color for the successful inline edit gutter indicator."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.gutterIndicator.background",
		"desc": "Background color for the inline edit gutter indicator."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.originalBackground",
		"desc": "Background color for the original text in inline edits."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.modifiedBackground",
		"desc": "Background color for the modified text in inline edits."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.originalChangedLineBackground",
		"desc": "Background color for the changed lines in the original text of inline edits."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.originalChangedTextBackground",
		"desc": "Overlay color for the changed text in the original text of inline edits."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.modifiedChangedLineBackground",
		"desc": "Background color for the changed lines in the modified text of inline edits."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.modifiedChangedTextBackground",
		"desc": "Overlay color for the changed text in the modified text of inline edits."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.originalBorder",
		"desc": "Border color for the original text in inline edits."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.modifiedBorder",
		"desc": "Border color for the modified text in inline edits."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.tabWillAcceptModifiedBorder",
		"desc": "Modified border color for the inline edits widget when tab will accept it."
	},
	{
		"section": "Editor colors",
		"id": "inlineEdit.tabWillAcceptOriginalBorder",
		"desc": "Original border color for the inline edits widget over the original text when tab will accept it."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditor.insertedTextBackground",
		"desc": "Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditor.insertedTextBorder",
		"desc": "Outline color for the text that got inserted."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditor.removedTextBackground",
		"desc": "Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditor.removedTextBorder",
		"desc": "Outline color for text that got removed."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditor.border",
		"desc": "Border color between the two text editors."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditor.diagonalFill",
		"desc": "Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditor.insertedLineBackground",
		"desc": "Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditor.removedLineBackground",
		"desc": "Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditorGutter.insertedLineBackground",
		"desc": "Background color for the margin where lines got inserted."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditorGutter.removedLineBackground",
		"desc": "Background color for the margin where lines got removed."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditorOverview.insertedForeground",
		"desc": "Diff overview ruler foreground for inserted content."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditorOverview.removedForeground",
		"desc": "Diff overview ruler foreground for removed content."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditor.unchangedRegionBackground",
		"desc": "The color of unchanged blocks in diff editor."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditor.unchangedRegionForeground",
		"desc": "The foreground color of unchanged blocks in the diff editor."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditor.unchangedRegionShadow",
		"desc": "The color of the shadow around unchanged region widgets."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditor.unchangedCodeBackground",
		"desc": "The background color of unchanged code in the diff editor."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditor.move.border",
		"desc": "The border color for text that got moved in the diff editor."
	},
	{
		"section": "Diff editor colors",
		"id": "diffEditor.moveActive.border",
		"desc": "The active border color for text that got moved in the diff editor."
	},
	{
		"section": "Diff editor colors",
		"id": "multiDiffEditor.headerBackground",
		"desc": "The background color of the diff editor's header"
	},
	{
		"section": "Diff editor colors",
		"id": "multiDiffEditor.background",
		"desc": "The background color of the multi file diff editor"
	},
	{
		"section": "Diff editor colors",
		"id": "multiDiffEditor.border",
		"desc": "The border color of the multi file diff editor"
	},
	{
		"section": "Chat colors",
		"id": "chat.requestBorder",
		"desc": "The border color of a chat request."
	},
	{
		"section": "Chat colors",
		"id": "chat.requestBackground",
		"desc": "The background color of a chat request."
	},
	{
		"section": "Chat colors",
		"id": "chat.slashCommandBackground",
		"desc": "The background color of a chat slash command."
	},
	{
		"section": "Chat colors",
		"id": "chat.slashCommandForeground",
		"desc": "The foreground color of a chat slash command."
	},
	{
		"section": "Chat colors",
		"id": "chat.avatarBackground",
		"desc": "The background color of a chat avatar."
	},
	{
		"section": "Chat colors",
		"id": "chat.avatarForeground",
		"desc": "The foreground color of a chat avatar."
	},
	{
		"section": "Chat colors",
		"id": "chat.editedFileForeground",
		"desc": "The foreground color of a chat edited file in the edited file list."
	},
	{
		"section": "Chat colors",
		"id": "chat.linesAddedForeground",
		"desc": "Foreground color of lines added in chat code block pill."
	},
	{
		"section": "Chat colors",
		"id": "chat.linesRemovedForeground",
		"desc": "Foreground color of lines removed in chat code block pill."
	},
	{
		"section": "Chat colors",
		"id": "chat.requestCodeBorder",
		"desc": "Border color of code blocks within the chat request bubble."
	},
	{
		"section": "Chat colors",
		"id": "chat.requestBubbleBackground",
		"desc": "Background color of the chat request bubble."
	},
	{
		"section": "Chat colors",
		"id": "chat.requestBubbleHoverBackground",
		"desc": "Background color of the chat request bubble on hover."
	},
	{
		"section": "Chat colors",
		"id": "chat.checkpointSeparator",
		"desc": "Chat checkpoint separator color."
	},
	{
		"section": "Chat colors",
		"id": "chat.thinkingShimmer",
		"desc": "Shimmer highlight for thinking/working labels."
	},
	{
		"section": "Chat colors",
		"id": "chatManagement.sashBorder",
		"desc": "The color of the Chat Management editor splitview sash border."
	},
	{
		"section": "Agent sessions colors",
		"id": "agents.background",
		"desc": "Background color of the agent sessions window shell and gradient base."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsPanel.background",
		"desc": "Background color of the card panels (chat, files, terminal) in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsPanel.foreground",
		"desc": "Foreground color of the card panels (chat, files, terminal) in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsPanel.border",
		"desc": "Border color of the card panels (chat, files, terminal) in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsCard.border",
		"desc": "Border color of the floating content card (sessions grid and custom view grid) in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsBottomPanel.border",
		"desc": "Border color of the bottom panel in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsGradient.tintColor",
		"desc": "Tint color used in the background gradient of the agent sessions window shell."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentFeedbackEditorWidget.background",
		"desc": "Background color of the agent feedback widget shown in the editor."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentFeedbackEditorWidget.border",
		"desc": "Border color of the agent feedback widget shown in the editor."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentFeedbackInputWidget.border",
		"desc": "Border color of the agent feedback input widget shown in the editor."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsUpdateButton.downloadingBackground",
		"desc": "Background color of the update button to show download progress in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsUpdateButton.downloadedBackground",
		"desc": "Background color of the update button when download is complete in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsChatInput.background",
		"desc": "Background color of the chat input field in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsChatInput.foreground",
		"desc": "Foreground color of the chat input field in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsChatInput.border",
		"desc": "Border color of the chat input field in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsChatInput.focusBorder",
		"desc": "Border color of the chat input field when focused in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsChatInput.placeholderForeground",
		"desc": "Placeholder text color in the chat input field in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsNewSessionButton.background",
		"desc": "Background color of the New Session button in the agent sessions sidebar."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsNewSessionButton.foreground",
		"desc": "Foreground color of the New Session button in the agent sessions sidebar."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsNewSessionButton.border",
		"desc": "Border color of the New Session button in the agent sessions sidebar."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsNewSessionButton.hoverBackground",
		"desc": "Background color of the New Session button when hovered in the agent sessions sidebar."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsBadge.background",
		"desc": "Background color of badges in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsBadge.foreground",
		"desc": "Foreground color of badges in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsUnreadBadge.background",
		"desc": "Background color of the unread sessions count badge on the sidebar toggle."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsUnreadBadge.foreground",
		"desc": "Foreground color of the unread sessions count badge on the sidebar toggle."
	},
	{
		"section": "Agent sessions colors",
		"id": "activeSessionView.background",
		"desc": "Background color of an active session view in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "inactiveSessionView.background",
		"desc": "Background color of an inactive session view in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "activeSessionView.foreground",
		"desc": "Foreground color of an active session view in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "inactiveSessionView.foreground",
		"desc": "Foreground color of an inactive session view in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsMobileDiff.addedForeground",
		"desc": "Foreground color used for added files and lines in the mobile changes list and diff overlay in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsMobileDiff.modifiedForeground",
		"desc": "Foreground color used for modified files in the mobile changes list in the agent sessions window."
	},
	{
		"section": "Agent sessions colors",
		"id": "agentsMobileDiff.deletedForeground",
		"desc": "Foreground color used for deleted files and removed lines in the mobile changes list and diff overlay in the agent sessions window."
	},
	{
		"section": "Inline Chat colors",
		"id": "inlineChat.background",
		"desc": "Background color of the interactive editor widget."
	},
	{
		"section": "Inline Chat colors",
		"id": "inlineChat.foreground",
		"desc": "Foreground color of the interactive editor widget"
	},
	{
		"section": "Inline Chat colors",
		"id": "inlineChat.border",
		"desc": "Border color of the interactive editor widget."
	},
	{
		"section": "Inline Chat colors",
		"id": "inlineChat.shadow",
		"desc": "Shadow color of the interactive editor widget."
	},
	{
		"section": "Inline Chat colors",
		"id": "inlineChatInput.border",
		"desc": "Border color of the interactive editor input."
	},
	{
		"section": "Inline Chat colors",
		"id": "inlineChatInput.focusBorder",
		"desc": "Border color of the interactive editor input when focused."
	},
	{
		"section": "Inline Chat colors",
		"id": "inlineChatInput.placeholderForeground",
		"desc": "Foreground color of the interactive editor input placeholder."
	},
	{
		"section": "Inline Chat colors",
		"id": "inlineChatInput.background",
		"desc": "Background color of the interactive editor input."
	},
	{
		"section": "Inline Chat colors",
		"id": "inlineChatDiff.inserted",
		"desc": "Background color of inserted text in the interactive editor input."
	},
	{
		"section": "Inline Chat colors",
		"id": "inlineChatDiff.removed",
		"desc": "Background color of removed text in the interactive editor input."
	},
	{
		"section": "Panel Chat colors",
		"id": "interactive.activeCodeBorder",
		"desc": "The border color for the current interactive code cell when the editor has focus."
	},
	{
		"section": "Panel Chat colors",
		"id": "interactive.inactiveCodeBorder",
		"desc": "The border color for the current interactive code cell when the editor does not have focus."
	},
	{
		"section": "Editor widget colors",
		"id": "editorWidget.foreground",
		"desc": "Foreground color of editor widgets, such as find/replace."
	},
	{
		"section": "Editor widget colors",
		"id": "editorWidget.background",
		"desc": "Background color of editor widgets, such as Find/Replace."
	},
	{
		"section": "Editor widget colors",
		"id": "editorWidget.border",
		"desc": "Border color of the editor widget unless the widget does not contain a border or defines its own border color."
	},
	{
		"section": "Editor widget colors",
		"id": "editorWidget.resizeBorder",
		"desc": "Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget."
	},
	{
		"section": "Editor widget colors",
		"id": "editorSuggestWidget.background",
		"desc": "Background color of the suggestion widget."
	},
	{
		"section": "Editor widget colors",
		"id": "editorSuggestWidget.border",
		"desc": "Border color of the suggestion widget."
	},
	{
		"section": "Editor widget colors",
		"id": "editorSuggestWidget.foreground",
		"desc": "Foreground color of the suggestion widget."
	},
	{
		"section": "Editor widget colors",
		"id": "editorSuggestWidget.focusHighlightForeground",
		"desc": "Color of the match highlights in the suggest widget when an item is focused."
	},
	{
		"section": "Editor widget colors",
		"id": "editorSuggestWidget.highlightForeground",
		"desc": "Color of the match highlights in the suggestion widget."
	},
	{
		"section": "Editor widget colors",
		"id": "editorSuggestWidget.selectedBackground",
		"desc": "Background color of the selected entry in the suggestion widget."
	},
	{
		"section": "Editor widget colors",
		"id": "editorSuggestWidget.selectedForeground",
		"desc": "Foreground color of the selected entry in the suggest widget."
	},
	{
		"section": "Editor widget colors",
		"id": "editorSuggestWidget.selectedIconForeground",
		"desc": "Icon foreground color of the selected entry in the suggest widget."
	},
	{
		"section": "Editor widget colors",
		"id": "editorSuggestWidgetStatus.foreground",
		"desc": "Foreground color of the suggest widget status."
	},
	{
		"section": "Editor widget colors",
		"id": "editorHoverWidget.foreground",
		"desc": "Foreground color of the editor hover."
	},
	{
		"section": "Editor widget colors",
		"id": "editorHoverWidget.background",
		"desc": "Background color of the editor hover."
	},
	{
		"section": "Editor widget colors",
		"id": "editorHoverWidget.border",
		"desc": "Border color of the editor hover."
	},
	{
		"section": "Editor widget colors",
		"id": "editorHoverWidget.highlightForeground",
		"desc": "Foreground color of the active item in the parameter hint."
	},
	{
		"section": "Editor widget colors",
		"id": "editorHoverWidget.statusBarBackground",
		"desc": "Background color of the editor hover status bar."
	},
	{
		"section": "Editor widget colors",
		"id": "editorGhostText.border",
		"desc": "Border color of the ghost text shown by inline completion providers and the suggest preview."
	},
	{
		"section": "Editor widget colors",
		"id": "editorGhostText.background",
		"desc": "Background color of the ghost text in the editor."
	},
	{
		"section": "Editor widget colors",
		"id": "editorGhostText.foreground",
		"desc": "Foreground color of the ghost text shown by inline completion providers and the suggest preview."
	},
	{
		"section": "Editor widget colors",
		"id": "editorStickyScroll.background",
		"desc": "Editor sticky scroll background color."
	},
	{
		"section": "Editor widget colors",
		"id": "editorStickyScroll.border",
		"desc": "Border color of sticky scroll in the editor."
	},
	{
		"section": "Editor widget colors",
		"id": "editorStickyScroll.shadow",
		"desc": "Shadow color of sticky scroll in the editor."
	},
	{
		"section": "Editor widget colors",
		"id": "editorStickyScrollGutter.background",
		"desc": "Background color of the gutter part of sticky scroll in the editor."
	},
	{
		"section": "Editor widget colors",
		"id": "editorStickyScrollHover.background",
		"desc": "Editor sticky scroll on hover background color."
	},
	{
		"section": "Editor widget colors",
		"id": "debugExceptionWidget.background",
		"desc": "Exception widget background color."
	},
	{
		"section": "Editor widget colors",
		"id": "debugExceptionWidget.border",
		"desc": "Exception widget border color."
	},
	{
		"section": "Editor widget colors",
		"id": "editorMarkerNavigation.background",
		"desc": "Editor marker navigation widget background."
	},
	{
		"section": "Editor widget colors",
		"id": "editorMarkerNavigationError.background",
		"desc": "Editor marker navigation widget error color."
	},
	{
		"section": "Editor widget colors",
		"id": "editorMarkerNavigationWarning.background",
		"desc": "Editor marker navigation widget warning color."
	},
	{
		"section": "Editor widget colors",
		"id": "editorMarkerNavigationInfo.background",
		"desc": "Editor marker navigation widget info color."
	},
	{
		"section": "Editor widget colors",
		"id": "editorMarkerNavigationError.headerBackground",
		"desc": "Editor marker navigation widget error heading background."
	},
	{
		"section": "Editor widget colors",
		"id": "editorMarkerNavigationWarning.headerBackground",
		"desc": "Editor marker navigation widget warning heading background."
	},
	{
		"section": "Editor widget colors",
		"id": "editorMarkerNavigationInfo.headerBackground",
		"desc": "Editor marker navigation widget info heading background."
	},
	{
		"section": "Peek view colors",
		"id": "peekView.border",
		"desc": "Color of the peek view borders and arrow."
	},
	{
		"section": "Peek view colors",
		"id": "peekViewEditor.background",
		"desc": "Background color of the peek view editor."
	},
	{
		"section": "Peek view colors",
		"id": "peekViewEditorGutter.background",
		"desc": "Background color of the gutter in the peek view editor."
	},
	{
		"section": "Peek view colors",
		"id": "peekViewEditor.matchHighlightBackground",
		"desc": "Match highlight color in the peek view editor."
	},
	{
		"section": "Peek view colors",
		"id": "peekViewEditor.matchHighlightBorder",
		"desc": "Match highlight border color in the peek view editor."
	},
	{
		"section": "Peek view colors",
		"id": "peekViewResult.background",
		"desc": "Background color of the peek view result list."
	},
	{
		"section": "Peek view colors",
		"id": "peekViewResult.fileForeground",
		"desc": "Foreground color for file nodes in the peek view result list."
	},
	{
		"section": "Peek view colors",
		"id": "peekViewResult.lineForeground",
		"desc": "Foreground color for line nodes in the peek view result list."
	},
	{
		"section": "Peek view colors",
		"id": "peekViewResult.matchHighlightBackground",
		"desc": "Match highlight color in the peek view result list."
	},
	{
		"section": "Peek view colors",
		"id": "peekViewResult.selectionBackground",
		"desc": "Background color of the selected entry in the peek view result list."
	},
	{
		"section": "Peek view colors",
		"id": "peekViewResult.selectionForeground",
		"desc": "Foreground color of the selected entry in the peek view result list."
	},
	{
		"section": "Peek view colors",
		"id": "peekViewTitle.background",
		"desc": "Background color of the peek view title area."
	},
	{
		"section": "Peek view colors",
		"id": "peekViewTitleDescription.foreground",
		"desc": "Color of the peek view title info."
	},
	{
		"section": "Peek view colors",
		"id": "peekViewTitleLabel.foreground",
		"desc": "Color of the peek view title."
	},
	{
		"section": "Peek view colors",
		"id": "peekViewEditorStickyScroll.background",
		"desc": "Background color of sticky scroll in the peek view editor."
	},
	{
		"section": "Peek view colors",
		"id": "peekViewEditorStickyScrollGutter.background",
		"desc": "Background color of the gutter part of sticky scroll in the peek view editor."
	},
	{
		"section": "Merge conflicts colors",
		"id": "merge.currentHeaderBackground",
		"desc": "Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Merge conflicts colors",
		"id": "merge.currentContentBackground",
		"desc": "Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Merge conflicts colors",
		"id": "merge.incomingHeaderBackground",
		"desc": "Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Merge conflicts colors",
		"id": "merge.incomingContentBackground",
		"desc": "Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Merge conflicts colors",
		"id": "merge.border",
		"desc": "Border color on headers and the splitter in inline merge conflicts."
	},
	{
		"section": "Merge conflicts colors",
		"id": "merge.commonContentBackground",
		"desc": "Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Merge conflicts colors",
		"id": "merge.commonHeaderBackground",
		"desc": "Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations."
	},
	{
		"section": "Merge conflicts colors",
		"id": "editorOverviewRuler.currentContentForeground",
		"desc": "Current overview ruler foreground for inline merge conflicts."
	},
	{
		"section": "Merge conflicts colors",
		"id": "editorOverviewRuler.incomingContentForeground",
		"desc": "Incoming overview ruler foreground for inline merge conflicts."
	},
	{
		"section": "Merge conflicts colors",
		"id": "editorOverviewRuler.commonContentForeground",
		"desc": "Common ancestor overview ruler foreground for inline merge conflicts."
	},
	{
		"section": "Merge conflicts colors",
		"id": "editorOverviewRuler.commentForeground",
		"desc": "Editor overview ruler decoration color for resolved comments. This color should be opaque."
	},
	{
		"section": "Merge conflicts colors",
		"id": "editorOverviewRuler.commentUnresolvedForeground",
		"desc": "Editor overview ruler decoration color for unresolved comments. This color should be opaque."
	},
	{
		"section": "Merge conflicts colors",
		"id": "mergeEditor.change.background",
		"desc": "The background color for changes."
	},
	{
		"section": "Merge conflicts colors",
		"id": "mergeEditor.change.word.background",
		"desc": "The background color for word changes."
	},
	{
		"section": "Merge conflicts colors",
		"id": "mergeEditor.conflict.unhandledUnfocused.border",
		"desc": "The border color of unhandled unfocused conflicts."
	},
	{
		"section": "Merge conflicts colors",
		"id": "mergeEditor.conflict.unhandledFocused.border",
		"desc": "The border color of unhandled focused conflicts."
	},
	{
		"section": "Merge conflicts colors",
		"id": "mergeEditor.conflict.handledUnfocused.border",
		"desc": "The border color of handled unfocused conflicts."
	},
	{
		"section": "Merge conflicts colors",
		"id": "mergeEditor.conflict.handledFocused.border",
		"desc": "The border color of handled focused conflicts."
	},
	{
		"section": "Merge conflicts colors",
		"id": "mergeEditor.conflict.handled.minimapOverViewRuler",
		"desc": "The foreground color for changes in input 1."
	},
	{
		"section": "Merge conflicts colors",
		"id": "mergeEditor.conflict.unhandled.minimapOverViewRuler",
		"desc": "The foreground color for changes in input 1."
	},
	{
		"section": "Merge conflicts colors",
		"id": "mergeEditor.conflictingLines.background",
		"desc": "The background of the \"Conflicting Lines\" text."
	},
	{
		"section": "Merge conflicts colors",
		"id": "mergeEditor.changeBase.background",
		"desc": "The background color for changes in base."
	},
	{
		"section": "Merge conflicts colors",
		"id": "mergeEditor.changeBase.word.background",
		"desc": "The background color for word changes in base."
	},
	{
		"section": "Merge conflicts colors",
		"id": "mergeEditor.conflict.input1.background",
		"desc": "The background color of decorations in input 1."
	},
	{
		"section": "Merge conflicts colors",
		"id": "mergeEditor.conflict.input2.background",
		"desc": "The background color of decorations in input 2."
	},
	{
		"section": "Panel colors",
		"id": "panel.background",
		"desc": "Panel background color."
	},
	{
		"section": "Panel colors",
		"id": "panel.border",
		"desc": "Panel border color to separate the panel from the editor."
	},
	{
		"section": "Panel colors",
		"id": "panel.dropBorder",
		"desc": "Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal."
	},
	{
		"section": "Panel colors",
		"id": "panelTitle.activeBorder",
		"desc": "Border color for the active panel title."
	},
	{
		"section": "Panel colors",
		"id": "panelTitle.activeForeground",
		"desc": "Title color for the active panel."
	},
	{
		"section": "Panel colors",
		"id": "panelTitle.inactiveForeground",
		"desc": "Title color for the inactive panel."
	},
	{
		"section": "Panel colors",
		"id": "panelTitle.border",
		"desc": "Panel title border color on the bottom, separating the title from the views. Panels are shown below the editor area and contain views like output and integrated terminal."
	},
	{
		"section": "Panel colors",
		"id": "panelTitleBadge.background",
		"desc": "Panel title badge background color. Panels are shown below the editor area and contain views like output and integrated terminal."
	},
	{
		"section": "Panel colors",
		"id": "panelTitleBadge.foreground",
		"desc": "Panel title badge foreground color. Panels are shown below the editor area and contain views like output and integrated terminal."
	},
	{
		"section": "Panel colors",
		"id": "panelInput.border",
		"desc": "Input box border for inputs in the panel."
	},
	{
		"section": "Panel colors",
		"id": "panelSection.border",
		"desc": "Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal."
	},
	{
		"section": "Panel colors",
		"id": "panelSection.dropBackground",
		"desc": "Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal."
	},
	{
		"section": "Panel colors",
		"id": "panelSectionHeader.background",
		"desc": "Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal."
	},
	{
		"section": "Panel colors",
		"id": "panelSectionHeader.foreground",
		"desc": "Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal."
	},
	{
		"section": "Panel colors",
		"id": "panelStickyScroll.background",
		"desc": "Background color of sticky scroll in the panel."
	},
	{
		"section": "Panel colors",
		"id": "panelStickyScroll.border",
		"desc": "Border color of sticky scroll in the panel."
	},
	{
		"section": "Panel colors",
		"id": "panelStickyScroll.shadow",
		"desc": "Shadow color of sticky scroll in the panel."
	},
	{
		"section": "Panel colors",
		"id": "panelSectionHeader.border",
		"desc": "Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal."
	},
	{
		"section": "Panel colors",
		"id": "outputView.background",
		"desc": "Output view background color."
	},
	{
		"section": "Panel colors",
		"id": "outputViewStickyScroll.background",
		"desc": "Output view sticky scroll background color."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBar.background",
		"desc": "Standard Status Bar background color."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBar.foreground",
		"desc": "Status Bar foreground color."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBar.border",
		"desc": "Status Bar border color separating the Status Bar and editor."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBar.debuggingBackground",
		"desc": "Status Bar background color when a program is being debugged."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBar.debuggingForeground",
		"desc": "Status Bar foreground color when a program is being debugged."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBar.debuggingBorder",
		"desc": "Status Bar border color separating the Status Bar and editor when a program is being debugged."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBar.noFolderForeground",
		"desc": "Status Bar foreground color when no folder is opened."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBar.noFolderBackground",
		"desc": "Status Bar background color when no folder is opened."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBar.noFolderBorder",
		"desc": "Status Bar border color separating the Status Bar and editor when no folder is opened."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.activeBackground",
		"desc": "Status Bar item background color when clicking."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.hoverForeground",
		"desc": "Status bar item foreground color when hovering. The status bar is shown in the bottom of the window."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.hoverBackground",
		"desc": "Status Bar item background color when hovering."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.prominentForeground",
		"desc": "Status Bar prominent items foreground color."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.prominentBackground",
		"desc": "Status Bar prominent items background color."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.prominentHoverForeground",
		"desc": "Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.prominentHoverBackground",
		"desc": "Status Bar prominent items background color when hovering."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.remoteBackground",
		"desc": "Background color for the remote indicator on the status bar."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.remoteForeground",
		"desc": "Foreground color for the remote indicator on the status bar."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.remoteHoverBackground",
		"desc": "Background color for the remote indicator on the status bar when hovering."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.remoteHoverForeground",
		"desc": "Foreground color for the remote indicator on the status bar when hovering."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.errorBackground",
		"desc": "Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.errorForeground",
		"desc": "Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.errorHoverBackground",
		"desc": "Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.errorHoverForeground",
		"desc": "Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.warningBackground",
		"desc": "Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.warningForeground",
		"desc": "Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.warningHoverBackground",
		"desc": "Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.warningHoverForeground",
		"desc": "Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.compactHoverBackground",
		"desc": "Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.focusBorder",
		"desc": "Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBar.focusBorder",
		"desc": "Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.offlineBackground",
		"desc": "Status bar item background color when the workbench is offline."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.offlineForeground",
		"desc": "Status bar item foreground color when the workbench is offline."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.offlineHoverForeground",
		"desc": "Status bar item foreground hover color when the workbench is offline."
	},
	{
		"section": "Status Bar colors",
		"id": "statusBarItem.offlineHoverBackground",
		"desc": "Status bar item background hover color when the workbench is offline."
	},
	{
		"section": "Title Bar colors",
		"id": "titleBar.activeBackground",
		"desc": "Title Bar background when the window is active."
	},
	{
		"section": "Title Bar colors",
		"id": "titleBar.activeForeground",
		"desc": "Title Bar foreground when the window is active."
	},
	{
		"section": "Title Bar colors",
		"id": "titleBar.inactiveBackground",
		"desc": "Title Bar background when the window is inactive."
	},
	{
		"section": "Title Bar colors",
		"id": "titleBar.inactiveForeground",
		"desc": "Title Bar foreground when the window is inactive."
	},
	{
		"section": "Title Bar colors",
		"id": "titleBar.border",
		"desc": "Title bar border color."
	},
	{
		"section": "Menu Bar colors",
		"id": "menubar.selectionForeground",
		"desc": "Foreground color of the selected menu item in the menubar."
	},
	{
		"section": "Menu Bar colors",
		"id": "menubar.selectionBackground",
		"desc": "Background color of the selected menu item in the menubar."
	},
	{
		"section": "Menu Bar colors",
		"id": "menubar.selectionBorder",
		"desc": "Border color of the selected menu item in the menubar."
	},
	{
		"section": "Menu Bar colors",
		"id": "menu.foreground",
		"desc": "Foreground color of menu items."
	},
	{
		"section": "Menu Bar colors",
		"id": "menu.background",
		"desc": "Background color of menu items."
	},
	{
		"section": "Menu Bar colors",
		"id": "menu.selectionForeground",
		"desc": "Foreground color of the selected menu item in menus."
	},
	{
		"section": "Menu Bar colors",
		"id": "menu.selectionBackground",
		"desc": "Background color of the selected menu item in menus."
	},
	{
		"section": "Menu Bar colors",
		"id": "menu.selectionBorder",
		"desc": "Border color of the selected menu item in menus."
	},
	{
		"section": "Menu Bar colors",
		"id": "menu.separatorBackground",
		"desc": "Color of a separator menu item in menus."
	},
	{
		"section": "Menu Bar colors",
		"id": "menu.border",
		"desc": "Border color of menus."
	},
	{
		"section": "Command Center colors",
		"id": "commandCenter.foreground",
		"desc": "Foreground color of the Command Center."
	},
	{
		"section": "Command Center colors",
		"id": "commandCenter.activeForeground",
		"desc": "Active foreground color of the Command Center."
	},
	{
		"section": "Command Center colors",
		"id": "commandCenter.background",
		"desc": "Background color of the Command Center."
	},
	{
		"section": "Command Center colors",
		"id": "commandCenter.activeBackground",
		"desc": "Active background color of the Command Center."
	},
	{
		"section": "Command Center colors",
		"id": "commandCenter.border",
		"desc": "Border color of the Command Center."
	},
	{
		"section": "Command Center colors",
		"id": "commandCenter.inactiveForeground",
		"desc": "Foreground color of the Command Center when the window is inactive."
	},
	{
		"section": "Command Center colors",
		"id": "commandCenter.inactiveBorder",
		"desc": "Border color of the Command Center when the window is inactive."
	},
	{
		"section": "Command Center colors",
		"id": "commandCenter.activeBorder",
		"desc": "Active border color of the Command Center."
	},
	{
		"section": "Command Center colors",
		"id": "commandCenter.debuggingBackground",
		"desc": "Command Center background color when a program is being debugged."
	},
	{
		"section": "Notification colors",
		"id": "notificationCenter.border",
		"desc": "Notification Center border color."
	},
	{
		"section": "Notification colors",
		"id": "notificationCenterHeader.foreground",
		"desc": "Notification Center header foreground color."
	},
	{
		"section": "Notification colors",
		"id": "notificationCenterHeader.background",
		"desc": "Notification Center header background color."
	},
	{
		"section": "Notification colors",
		"id": "notificationToast.border",
		"desc": "Notification toast border color."
	},
	{
		"section": "Notification colors",
		"id": "notifications.foreground",
		"desc": "Notification foreground color."
	},
	{
		"section": "Notification colors",
		"id": "notifications.background",
		"desc": "Notification background color."
	},
	{
		"section": "Notification colors",
		"id": "notifications.border",
		"desc": "Notification border color separating from other notifications in the Notification Center."
	},
	{
		"section": "Notification colors",
		"id": "notificationLink.foreground",
		"desc": "Notification links foreground color."
	},
	{
		"section": "Notification colors",
		"id": "notificationsErrorIcon.foreground",
		"desc": "The color used for the notification error icon."
	},
	{
		"section": "Notification colors",
		"id": "notificationsWarningIcon.foreground",
		"desc": "The color used for the notification warning icon."
	},
	{
		"section": "Notification colors",
		"id": "notificationsInfoIcon.foreground",
		"desc": "The color used for the notification info icon."
	},
	{
		"section": "Banner colors",
		"id": "banner.background",
		"desc": "Banner background color."
	},
	{
		"section": "Banner colors",
		"id": "banner.foreground",
		"desc": "Banner foreground color."
	},
	{
		"section": "Banner colors",
		"id": "banner.iconForeground",
		"desc": "Color for the icon in front of the banner text."
	},
	{
		"section": "Extensions colors",
		"id": "extensionButton.prominentForeground",
		"desc": "Extension view button foreground color (for example **Install** button)."
	},
	{
		"section": "Extensions colors",
		"id": "extensionButton.prominentBackground",
		"desc": "Extension view button background color."
	},
	{
		"section": "Extensions colors",
		"id": "extensionButton.prominentHoverBackground",
		"desc": "Extension view button background hover color."
	},
	{
		"section": "Extensions colors",
		"id": "extensionButton.background",
		"desc": "Button background color for extension actions."
	},
	{
		"section": "Extensions colors",
		"id": "extensionButton.foreground",
		"desc": "Button foreground color for extension actions."
	},
	{
		"section": "Extensions colors",
		"id": "extensionButton.hoverBackground",
		"desc": "Button background hover color for extension actions."
	},
	{
		"section": "Extensions colors",
		"id": "extensionButton.separator",
		"desc": "Button separator color for extension actions."
	},
	{
		"section": "Extensions colors",
		"id": "extensionButton.border",
		"desc": "Button border color for extension actions."
	},
	{
		"section": "Extensions colors",
		"id": "extensionBadge.remoteBackground",
		"desc": "Background color for the remote badge in the extensions view."
	},
	{
		"section": "Extensions colors",
		"id": "extensionBadge.remoteForeground",
		"desc": "Foreground color for the remote badge in the extensions view."
	},
	{
		"section": "Extensions colors",
		"id": "extensionIcon.starForeground",
		"desc": "The icon color for extension ratings."
	},
	{
		"section": "Extensions colors",
		"id": "extensionIcon.verifiedForeground",
		"desc": "The icon color for extension verified publisher."
	},
	{
		"section": "Extensions colors",
		"id": "extensionIcon.preReleaseForeground",
		"desc": "The icon color for pre-release extension."
	},
	{
		"section": "Extensions colors",
		"id": "extensionIcon.sponsorForeground",
		"desc": "The icon color for extension sponsor."
	},
	{
		"section": "Extensions colors",
		"id": "extensionIcon.privateForeground",
		"desc": "The icon color for private extensions."
	},
	{
		"section": "Extensions colors",
		"id": "mcpIcon.starForeground",
		"desc": "The icon color for mcp starred."
	},
	{
		"section": "Quick picker colors",
		"id": "pickerGroup.border",
		"desc": "Quick picker (Quick Open) color for grouping borders."
	},
	{
		"section": "Quick picker colors",
		"id": "pickerGroup.foreground",
		"desc": "Quick picker (Quick Open) color for grouping labels."
	},
	{
		"section": "Quick picker colors",
		"id": "quickInput.background",
		"desc": "Quick input background color. The quick input widget is the container for views like the color theme picker."
	},
	{
		"section": "Quick picker colors",
		"id": "quickInput.foreground",
		"desc": "Quick input foreground color. The quick input widget is the container for views like the color theme picker."
	},
	{
		"section": "Quick picker colors",
		"id": "quickInputList.focusBackground",
		"desc": "Quick picker background color for the focused item."
	},
	{
		"section": "Quick picker colors",
		"id": "quickInputList.focusForeground",
		"desc": "Quick picker foreground color for the focused item."
	},
	{
		"section": "Quick picker colors",
		"id": "quickInputList.focusIconForeground",
		"desc": "Quick picker icon foreground color for the focused item."
	},
	{
		"section": "Quick picker colors",
		"id": "quickInputTitle.background",
		"desc": "Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette."
	},
	{
		"section": "Keybinding label colors",
		"id": "keybindingLabel.background",
		"desc": "Keybinding label background color. The keybinding label is used to represent a keyboard shortcut."
	},
	{
		"section": "Keybinding label colors",
		"id": "keybindingLabel.foreground",
		"desc": "Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut."
	},
	{
		"section": "Keybinding label colors",
		"id": "keybindingLabel.border",
		"desc": "Keybinding label border color. The keybinding label is used to represent a keyboard shortcut."
	},
	{
		"section": "Keybinding label colors",
		"id": "keybindingLabel.bottomBorder",
		"desc": "Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut."
	},
	{
		"section": "Keyboard shortcut table colors",
		"id": "keybindingTable.headerBackground",
		"desc": "Background color for the keyboard shortcuts table header."
	},
	{
		"section": "Keyboard shortcut table colors",
		"id": "keybindingTable.rowsBackground",
		"desc": "Background color for the keyboard shortcuts table alternating rows."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.background",
		"desc": "The background of the Integrated Terminal's viewport."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.border",
		"desc": "The color of the border that separates split panes within the terminal. This defaults to panel.border."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.foreground",
		"desc": "The default foreground color of the Integrated Terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiBlack",
		"desc": "'Black' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiBlue",
		"desc": "'Blue' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiBrightBlack",
		"desc": "'BrightBlack' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiBrightBlue",
		"desc": "'BrightBlue' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiBrightCyan",
		"desc": "'BrightCyan' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiBrightGreen",
		"desc": "'BrightGreen' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiBrightMagenta",
		"desc": "'BrightMagenta' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiBrightRed",
		"desc": "'BrightRed' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiBrightWhite",
		"desc": "'BrightWhite' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiBrightYellow",
		"desc": "'BrightYellow' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiCyan",
		"desc": "'Cyan' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiGreen",
		"desc": "'Green' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiMagenta",
		"desc": "'Magenta' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiRed",
		"desc": "'Red' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiWhite",
		"desc": "'White' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.ansiYellow",
		"desc": "'Yellow' ANSI color in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.selectionBackground",
		"desc": "The selection background color of the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.selectionForeground",
		"desc": "The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.inactiveSelectionBackground",
		"desc": "The selection background color of the terminal when it does not have focus."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.findMatchBackground",
		"desc": "Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.findMatchBorder",
		"desc": "Border color of the current search match in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.findMatchHighlightBackground",
		"desc": "Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.findMatchHighlightBorder",
		"desc": "Border color of the other search matches in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.hoverHighlightBackground",
		"desc": "Color of the highlight when hovering a link in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalCursor.background",
		"desc": "The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalCursor.foreground",
		"desc": "The foreground color of the terminal cursor."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.dropBackground",
		"desc": "The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.tab.activeBorder",
		"desc": "Border on the side of the terminal tab in the panel. This defaults to `tab.activeBorder`."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalCommandDecoration.defaultBackground",
		"desc": "The default terminal command decoration background color."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalCommandDecoration.successBackground",
		"desc": "The terminal command decoration background color for successful commands."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalCommandDecoration.errorBackground",
		"desc": "The terminal command decoration background color for error commands."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalOverviewRuler.cursorForeground",
		"desc": "The overview ruler cursor color."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalOverviewRuler.findMatchForeground",
		"desc": "Overview ruler marker color for find matches in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalStickyScroll.background",
		"desc": "The background color of the sticky scroll overlay in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalStickyScroll.border",
		"desc": "The border of the sticky scroll overlay in the terminal."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalStickyScrollHover.background",
		"desc": "The background color of the sticky scroll overlay in the terminal when hovered."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminal.initialHintForeground",
		"desc": "Foreground color of the terminal initial hint."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalOverviewRuler.border",
		"desc": "The overview ruler left-side border color."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalCommandGuide.foreground",
		"desc": "The foreground color of the terminal command guide that appears to the left of a command and its output on hover."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.aliasForeground",
		"desc": "The foreground color for an alias icon. These icons will appear in the terminal suggest widget"
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.branchForeground",
		"desc": "The foreground color for a branch icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.commitForeground",
		"desc": "The foreground color for a commit icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.flagForeground",
		"desc": "The foreground color for an flag icon. These icons will appear in the terminal suggest widget"
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.optionForeground",
		"desc": "The foreground color for an option icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.optionValueForeground",
		"desc": "The foreground color for an enum member icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.methodForeground",
		"desc": "The foreground color for a method icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.argumentForeground",
		"desc": "The foreground color for an argument icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.inlineSuggestionForeground",
		"desc": "The foreground color for an inline suggestion icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.fileForeground",
		"desc": "The foreground color for a file icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.folderForeground",
		"desc": "The foreground color for a folder icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.pullRequestDoneForeground",
		"desc": "The foreground color for a completed pull request icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.pullRequestForeground",
		"desc": "The foreground color for a pull request icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.remoteForeground",
		"desc": "The foreground color for a remote icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.stashForeground",
		"desc": "The foreground color for a stash icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.symbolText",
		"desc": "The foreground color for a plaintext suggestion. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.symbolicLinkFileForeground",
		"desc": "The foreground color for a symbolic link file icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.symbolicLinkFolderForeground",
		"desc": "The foreground color for a symbolic link folder icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Integrated Terminal colors",
		"id": "terminalSymbolIcon.tagForeground",
		"desc": "The foreground color for a tag icon. These icons will appear in the terminal suggest widget."
	},
	{
		"section": "Debug colors",
		"id": "debugToolBar.background",
		"desc": "Debug toolbar background color."
	},
	{
		"section": "Debug colors",
		"id": "debugToolBar.border",
		"desc": "Debug toolbar border color."
	},
	{
		"section": "Debug colors",
		"id": "editor.stackFrameHighlightBackground",
		"desc": "Background color of the top stack frame highlight in the editor."
	},
	{
		"section": "Debug colors",
		"id": "editor.focusedStackFrameHighlightBackground",
		"desc": "Background color of the focused stack frame highlight in the editor."
	},
	{
		"section": "Debug colors",
		"id": "editor.inlineValuesForeground",
		"desc": "Color for the debug inline value text."
	},
	{
		"section": "Debug colors",
		"id": "editor.inlineValuesBackground",
		"desc": "Color for the debug inline value background."
	},
	{
		"section": "Debug colors",
		"id": "debugView.exceptionLabelForeground",
		"desc": "Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception."
	},
	{
		"section": "Debug colors",
		"id": "debugView.exceptionLabelBackground",
		"desc": "Background color for a label shown in the CALL STACK view when the debugger breaks on an exception."
	},
	{
		"section": "Debug colors",
		"id": "debugView.stateLabelForeground",
		"desc": "Foreground color for a label in the CALL STACK view showing the current session's or thread's state."
	},
	{
		"section": "Debug colors",
		"id": "debugView.stateLabelBackground",
		"desc": "Background color for a label in the CALL STACK view showing the current session's or thread's state."
	},
	{
		"section": "Debug colors",
		"id": "debugView.valueChangedHighlight",
		"desc": "Color used to highlight value changes in the debug views (such as in the Variables view)."
	},
	{
		"section": "Debug colors",
		"id": "debugTokenExpression.name",
		"desc": "Foreground color for the token names shown in debug views (such as in the Variables or Watch view)."
	},
	{
		"section": "Debug colors",
		"id": "debugTokenExpression.value",
		"desc": "Foreground color for the token values shown in debug views."
	},
	{
		"section": "Debug colors",
		"id": "debugTokenExpression.string",
		"desc": "Foreground color for strings in debug views."
	},
	{
		"section": "Debug colors",
		"id": "debugTokenExpression.boolean",
		"desc": "Foreground color for booleans in debug views."
	},
	{
		"section": "Debug colors",
		"id": "debugTokenExpression.number",
		"desc": "Foreground color for numbers in debug views."
	},
	{
		"section": "Debug colors",
		"id": "debugTokenExpression.error",
		"desc": "Foreground color for expression errors in debug views."
	},
	{
		"section": "Debug colors",
		"id": "debugTokenExpression.type",
		"desc": "Foreground color for the token types shown in the debug views (ie. the Variables or Watch view)."
	},
	{
		"section": "Testing colors",
		"id": "testing.runAction",
		"desc": "Color for 'run' icons in the editor."
	},
	{
		"section": "Testing colors",
		"id": "testing.iconErrored",
		"desc": "Color for the 'Errored' icon in the test explorer."
	},
	{
		"section": "Testing colors",
		"id": "testing.iconFailed",
		"desc": "Color for the 'failed' icon in the test explorer."
	},
	{
		"section": "Testing colors",
		"id": "testing.iconPassed",
		"desc": "Color for the 'passed' icon in the test explorer."
	},
	{
		"section": "Testing colors",
		"id": "testing.iconQueued",
		"desc": "Color for the 'Queued' icon in the test explorer."
	},
	{
		"section": "Testing colors",
		"id": "testing.iconUnset",
		"desc": "Color for the 'Unset' icon in the test explorer."
	},
	{
		"section": "Testing colors",
		"id": "testing.iconSkipped",
		"desc": "Color for the 'Skipped' icon in the test explorer."
	},
	{
		"section": "Testing colors",
		"id": "testing.iconErrored.retired",
		"desc": "Retired color for the 'Errored' icon in the test explorer."
	},
	{
		"section": "Testing colors",
		"id": "testing.iconFailed.retired",
		"desc": "Retired color for the 'failed' icon in the test explorer."
	},
	{
		"section": "Testing colors",
		"id": "testing.iconPassed.retired",
		"desc": "Retired color for the 'passed' icon in the test explorer."
	},
	{
		"section": "Testing colors",
		"id": "testing.iconQueued.retired",
		"desc": "Retired color for the 'Queued' icon in the test explorer."
	},
	{
		"section": "Testing colors",
		"id": "testing.iconUnset.retired",
		"desc": "Retired color for the 'Unset' icon in the test explorer."
	},
	{
		"section": "Testing colors",
		"id": "testing.iconSkipped.retired",
		"desc": "Retired color for the 'Skipped' icon in the test explorer."
	},
	{
		"section": "Testing colors",
		"id": "testing.peekBorder",
		"desc": "Color of the peek view borders and arrow."
	},
	{
		"section": "Testing colors",
		"id": "testing.peekHeaderBackground",
		"desc": "Color of the peek view borders and arrow."
	},
	{
		"section": "Testing colors",
		"id": "testing.message.error.lineBackground",
		"desc": "Margin color beside error messages shown inline in the editor."
	},
	{
		"section": "Testing colors",
		"id": "testing.message.info.decorationForeground",
		"desc": "Text color of test info messages shown inline in the editor."
	},
	{
		"section": "Testing colors",
		"id": "testing.message.info.lineBackground",
		"desc": "Margin color beside info messages shown inline in the editor."
	},
	{
		"section": "Testing colors",
		"id": "testing.messagePeekBorder",
		"desc": "Color of the peek view borders and arrow when peeking a logged message."
	},
	{
		"section": "Testing colors",
		"id": "testing.messagePeekHeaderBackground",
		"desc": "Color of the peek view borders and arrow when peeking a logged message."
	},
	{
		"section": "Testing colors",
		"id": "testing.coveredBackground",
		"desc": "Background color of text that was covered."
	},
	{
		"section": "Testing colors",
		"id": "testing.coveredBorder",
		"desc": "Border color of text that was covered."
	},
	{
		"section": "Testing colors",
		"id": "testing.coveredGutterBackground",
		"desc": "Gutter color of regions where code was covered."
	},
	{
		"section": "Testing colors",
		"id": "testing.uncoveredBranchBackground",
		"desc": "Background of the widget shown for an uncovered branch."
	},
	{
		"section": "Testing colors",
		"id": "testing.uncoveredBackground",
		"desc": "Background color of text that was not covered."
	},
	{
		"section": "Testing colors",
		"id": "testing.uncoveredBorder",
		"desc": "Border color of text that was not covered."
	},
	{
		"section": "Testing colors",
		"id": "testing.uncoveredGutterBackground",
		"desc": "Gutter color of regions where code not covered."
	},
	{
		"section": "Testing colors",
		"id": "testing.coverCountBadgeBackground",
		"desc": "Background for the badge indicating execution count"
	},
	{
		"section": "Testing colors",
		"id": "testing.coverCountBadgeForeground",
		"desc": "Foreground for the badge indicating execution count"
	},
	{
		"section": "Testing colors",
		"id": "testing.message.error.badgeBackground",
		"desc": "Background color of test error messages shown inline in the editor."
	},
	{
		"section": "Testing colors",
		"id": "testing.message.error.badgeBorder",
		"desc": "Border color of test error messages shown inline in the editor."
	},
	{
		"section": "Testing colors",
		"id": "testing.message.error.badgeForeground",
		"desc": "Text color of test error messages shown inline in the editor."
	},
	{
		"section": "Welcome page colors",
		"id": "welcomePage.background",
		"desc": "Background color for the Welcome page."
	},
	{
		"section": "Welcome page colors",
		"id": "welcomePage.progress.background",
		"desc": "Foreground color for the Welcome page progress bars."
	},
	{
		"section": "Welcome page colors",
		"id": "welcomePage.progress.foreground",
		"desc": "Background color for the Welcome page progress bars."
	},
	{
		"section": "Welcome page colors",
		"id": "welcomePage.tileBackground",
		"desc": "Background color for the tiles on the Welcome page."
	},
	{
		"section": "Welcome page colors",
		"id": "welcomePage.tileHoverBackground",
		"desc": "Hover background color for the tiles on the Welcome page."
	},
	{
		"section": "Welcome page colors",
		"id": "welcomePage.tileBorder",
		"desc": "Border color for the tiles on the Welcome page."
	},
	{
		"section": "Welcome page colors",
		"id": "walkThrough.embeddedEditorBackground",
		"desc": "Background color for the embedded editors on the Interactive Playground."
	},
	{
		"section": "Welcome page colors",
		"id": "walkthrough.stepTitle.foreground",
		"desc": "Foreground color of the heading of each walkthrough step."
	},
	{
		"section": "Git colors",
		"id": "gitDecoration.addedResourceForeground",
		"desc": "Color for added Git resources. Used for file labels and the SCM viewlet."
	},
	{
		"section": "Git colors",
		"id": "gitDecoration.modifiedResourceForeground",
		"desc": "Color for modified Git resources. Used for file labels and the SCM viewlet."
	},
	{
		"section": "Git colors",
		"id": "gitDecoration.deletedResourceForeground",
		"desc": "Color for deleted Git resources. Used for file labels and the SCM viewlet."
	},
	{
		"section": "Git colors",
		"id": "gitDecoration.renamedResourceForeground",
		"desc": "Color for renamed or copied Git resources. Used for file labels and the SCM viewlet."
	},
	{
		"section": "Git colors",
		"id": "gitDecoration.stageModifiedResourceForeground",
		"desc": "Color for staged modifications git decorations. Used for file labels and the SCM viewlet."
	},
	{
		"section": "Git colors",
		"id": "gitDecoration.stageDeletedResourceForeground",
		"desc": "Color for staged deletions git decorations. Used for file labels and the SCM viewlet."
	},
	{
		"section": "Git colors",
		"id": "gitDecoration.untrackedResourceForeground",
		"desc": "Color for untracked Git resources. Used for file labels and the SCM viewlet."
	},
	{
		"section": "Git colors",
		"id": "gitDecoration.ignoredResourceForeground",
		"desc": "Color for ignored Git resources. Used for file labels and the SCM viewlet."
	},
	{
		"section": "Git colors",
		"id": "gitDecoration.conflictingResourceForeground",
		"desc": "Color for conflicting Git resources. Used for file labels and the SCM viewlet."
	},
	{
		"section": "Git colors",
		"id": "gitDecoration.submoduleResourceForeground",
		"desc": "Color for submodule resources."
	},
	{
		"section": "Git colors",
		"id": "git.blame.editorDecorationForeground",
		"desc": "Color for the blame editor decoration."
	},
	{
		"section": "Source Control Graph colors",
		"id": "scmGraph.historyItemHoverLabelForeground",
		"desc": "History item hover label foreground color."
	},
	{
		"section": "Source Control Graph colors",
		"id": "scmGraph.foreground1",
		"desc": "Source control graph foreground color (1)."
	},
	{
		"section": "Source Control Graph colors",
		"id": "scmGraph.foreground2",
		"desc": "Source control graph foreground color (2)."
	},
	{
		"section": "Source Control Graph colors",
		"id": "scmGraph.foreground3",
		"desc": "Source control graph foreground color (3)."
	},
	{
		"section": "Source Control Graph colors",
		"id": "scmGraph.foreground4",
		"desc": "Source control graph foreground color (4)."
	},
	{
		"section": "Source Control Graph colors",
		"id": "scmGraph.foreground5",
		"desc": "Source control graph foreground color (5)."
	},
	{
		"section": "Source Control Graph colors",
		"id": "scmGraph.historyItemHoverAdditionsForeground",
		"desc": "History item hover additions foreground color."
	},
	{
		"section": "Source Control Graph colors",
		"id": "scmGraph.historyItemHoverDeletionsForeground",
		"desc": "History item hover deletions foreground color."
	},
	{
		"section": "Source Control Graph colors",
		"id": "scmGraph.historyItemRefColor",
		"desc": "History item reference color."
	},
	{
		"section": "Source Control Graph colors",
		"id": "scmGraph.historyItemRemoteRefColor",
		"desc": "History item remote reference color."
	},
	{
		"section": "Source Control Graph colors",
		"id": "scmGraph.historyItemBaseRefColor",
		"desc": "History item base reference color."
	},
	{
		"section": "Source Control Graph colors",
		"id": "scmGraph.historyItemHoverDefaultLabelForeground",
		"desc": "History item hover default label foreground color."
	},
	{
		"section": "Source Control Graph colors",
		"id": "scmGraph.historyItemHoverDefaultLabelBackground",
		"desc": "History item hover default label background color."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.headerForeground",
		"desc": "The foreground color for a section header or active title."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.modifiedItemIndicator",
		"desc": "The line that indicates a modified setting."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.dropdownBackground",
		"desc": "Dropdown background."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.dropdownForeground",
		"desc": "Dropdown foreground."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.dropdownBorder",
		"desc": "Dropdown border."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.dropdownListBorder",
		"desc": "Dropdown list border."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.checkboxBackground",
		"desc": "Checkbox background."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.checkboxForeground",
		"desc": "Checkbox foreground."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.checkboxBorder",
		"desc": "Checkbox border."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.rowHoverBackground",
		"desc": "The background color of a settings row when hovered."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.textInputBackground",
		"desc": "Text input box background."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.textInputForeground",
		"desc": "Text input box foreground."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.textInputBorder",
		"desc": "Text input box border."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.numberInputBackground",
		"desc": "Number input box background."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.numberInputForeground",
		"desc": "Number input box foreground."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.numberInputBorder",
		"desc": "Number input box border."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.focusedRowBackground",
		"desc": "Background color of a focused setting row."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.focusedRowBorder",
		"desc": "The color of the row's top and bottom border when the row is focused."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.headerBorder",
		"desc": "The color of the header container border."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.sashBorder",
		"desc": "The color of the Settings editor splitview sash border."
	},
	{
		"section": "Settings Editor colors",
		"id": "settings.settingsHeaderHoverForeground",
		"desc": "The foreground color for a section header or hovered title."
	},
	{
		"section": "Breadcrumbs colors",
		"id": "breadcrumb.foreground",
		"desc": "Color of breadcrumb items."
	},
	{
		"section": "Breadcrumbs colors",
		"id": "breadcrumb.background",
		"desc": "Background color of breadcrumb items."
	},
	{
		"section": "Breadcrumbs colors",
		"id": "breadcrumb.focusForeground",
		"desc": "Color of focused breadcrumb items."
	},
	{
		"section": "Breadcrumbs colors",
		"id": "breadcrumb.activeSelectionForeground",
		"desc": "Color of selected breadcrumb items."
	},
	{
		"section": "Breadcrumbs colors",
		"id": "breadcrumbPicker.background",
		"desc": "Background color of breadcrumb item picker."
	},
	{
		"section": "Snippets colors",
		"id": "editor.snippetTabstopHighlightBackground",
		"desc": "Highlight background color of a snippet tabstop."
	},
	{
		"section": "Snippets colors",
		"id": "editor.snippetTabstopHighlightBorder",
		"desc": "Highlight border color of a snippet tabstop."
	},
	{
		"section": "Snippets colors",
		"id": "editor.snippetFinalTabstopHighlightBackground",
		"desc": "Highlight background color of the final tabstop of a snippet."
	},
	{
		"section": "Snippets colors",
		"id": "editor.snippetFinalTabstopHighlightBorder",
		"desc": "Highlight border color of the final tabstop of a snippet."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.arrayForeground",
		"desc": "The foreground color for array symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.booleanForeground",
		"desc": "The foreground color for boolean symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.classForeground",
		"desc": "The foreground color for class symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.colorForeground",
		"desc": "The foreground color for color symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.constantForeground",
		"desc": "The foreground color for constant symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.constructorForeground",
		"desc": "The foreground color for constructor symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.enumeratorForeground",
		"desc": "The foreground color for enumerator symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.enumeratorMemberForeground",
		"desc": "The foreground color for enumerator member symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.eventForeground",
		"desc": "The foreground color for event symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.fieldForeground",
		"desc": "The foreground color for field symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.fileForeground",
		"desc": "The foreground color for file symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.folderForeground",
		"desc": "The foreground color for folder symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.functionForeground",
		"desc": "The foreground color for function symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.interfaceForeground",
		"desc": "The foreground color for interface symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.keyForeground",
		"desc": "The foreground color for key symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.keywordForeground",
		"desc": "The foreground color for keyword symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.methodForeground",
		"desc": "The foreground color for method symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.moduleForeground",
		"desc": "The foreground color for module symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.namespaceForeground",
		"desc": "The foreground color for namespace symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.nullForeground",
		"desc": "The foreground color for null symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.numberForeground",
		"desc": "The foreground color for number symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.objectForeground",
		"desc": "The foreground color for object symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.operatorForeground",
		"desc": "The foreground color for operator symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.packageForeground",
		"desc": "The foreground color for package symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.propertyForeground",
		"desc": "The foreground color for property symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.referenceForeground",
		"desc": "The foreground color for reference symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.snippetForeground",
		"desc": "The foreground color for snippet symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.stringForeground",
		"desc": "The foreground color for string symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.structForeground",
		"desc": "The foreground color for struct symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.textForeground",
		"desc": "The foreground color for text symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.typeParameterForeground",
		"desc": "The foreground color for type parameter symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.unitForeground",
		"desc": "The foreground color for unit symbols."
	},
	{
		"section": "Symbol Icons colors",
		"id": "symbolIcon.variableForeground",
		"desc": "The foreground color for variable symbols."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugIcon.breakpointForeground",
		"desc": "Icon color for breakpoints."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugIcon.breakpointDisabledForeground",
		"desc": "Icon color for disabled breakpoints."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugIcon.breakpointUnverifiedForeground",
		"desc": "Icon color for unverified breakpoints."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugIcon.breakpointCurrentStackframeForeground",
		"desc": "Icon color for the current breakpoint stack frame."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugIcon.breakpointStackframeForeground",
		"desc": "Icon color for all breakpoint stack frames."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugIcon.startForeground",
		"desc": "Debug toolbar icon for start debugging."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugIcon.pauseForeground",
		"desc": "Debug toolbar icon for pause."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugIcon.stopForeground",
		"desc": "Debug toolbar icon for stop."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugIcon.disconnectForeground",
		"desc": "Debug toolbar icon for disconnect."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugIcon.restartForeground",
		"desc": "Debug toolbar icon for restart."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugIcon.stepOverForeground",
		"desc": "Debug toolbar icon for step over."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugIcon.stepIntoForeground",
		"desc": "Debug toolbar icon for step into."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugIcon.stepOutForeground",
		"desc": "Debug toolbar icon for step over."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugIcon.continueForeground",
		"desc": "Debug toolbar icon for continue."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugIcon.stepBackForeground",
		"desc": "Debug toolbar icon for step back."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugConsole.infoForeground",
		"desc": "Foreground color for info messages in debug REPL console."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugConsole.warningForeground",
		"desc": "Foreground color for warning messages in debug REPL console."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugConsole.errorForeground",
		"desc": "Foreground color for error messages in debug REPL console."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugConsole.sourceForeground",
		"desc": "Foreground color for source filenames in debug REPL console."
	},
	{
		"section": "Debug Icons colors",
		"id": "debugConsoleInputIcon.foreground",
		"desc": "Foreground color for debug console input marker icon."
	},
	{
		"section": "Notebook colors",
		"id": "notebook.editorBackground",
		"desc": "Notebook background color."
	},
	{
		"section": "Notebook colors",
		"id": "notebook.cellBorderColor",
		"desc": "The border color for notebook cells."
	},
	{
		"section": "Notebook colors",
		"id": "notebook.cellHoverBackground",
		"desc": "The background color of a cell when the cell is hovered."
	},
	{
		"section": "Notebook colors",
		"id": "notebook.cellInsertionIndicator",
		"desc": "The color of the notebook cell insertion indicator."
	},
	{
		"section": "Notebook colors",
		"id": "notebook.cellStatusBarItemHoverBackground",
		"desc": "The background color of notebook cell status bar items."
	},
	{
		"section": "Notebook colors",
		"id": "notebook.cellToolbarSeparator",
		"desc": "The color of the separator in the cell bottom toolbar"
	},
	{
		"section": "Notebook colors",
		"id": "notebook.cellEditorBackground",
		"desc": "The color of the notebook cell editor background"
	},
	{
		"section": "Notebook colors",
		"id": "notebook.focusedCellBackground",
		"desc": "The background color of a cell when the cell is focused."
	},
	{
		"section": "Notebook colors",
		"id": "notebook.focusedCellBorder",
		"desc": "The color of the cell's focus indicator borders when the cell is focused."
	},
	{
		"section": "Notebook colors",
		"id": "notebook.focusedEditorBorder",
		"desc": "The color of the notebook cell editor border."
	},
	{
		"section": "Notebook colors",
		"id": "notebook.inactiveFocusedCellBorder",
		"desc": "The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor."
	},
	{
		"section": "Notebook colors",
		"id": "notebook.inactiveSelectedCellBorder",
		"desc": "The color of the cell's borders when multiple cells are selected."
	},
	{
		"section": "Notebook colors",
		"id": "notebook.outputContainerBackgroundColor",
		"desc": "The Color of the notebook output container background."
	},
	{
		"section": "Notebook colors",
		"id": "notebook.outputContainerBorderColor",
		"desc": "The border color of the notebook output container."
	},
	{
		"section": "Notebook colors",
		"id": "notebook.selectedCellBackground",
		"desc": "The background color of a cell when the cell is selected."
	},
	{
		"section": "Notebook colors",
		"id": "notebook.selectedCellBorder",
		"desc": "The color of the cell's top and bottom border when the cell is selected but not focused."
	},
	{
		"section": "Notebook colors",
		"id": "notebook.symbolHighlightBackground",
		"desc": "Background color of highlighted cell"
	},
	{
		"section": "Notebook colors",
		"id": "notebookScrollbarSlider.activeBackground",
		"desc": "Notebook scrollbar slider background color when clicked on."
	},
	{
		"section": "Notebook colors",
		"id": "notebookScrollbarSlider.background",
		"desc": "Notebook scrollbar slider background color."
	},
	{
		"section": "Notebook colors",
		"id": "notebookScrollbarSlider.hoverBackground",
		"desc": "Notebook scrollbar slider background color when hovering."
	},
	{
		"section": "Notebook colors",
		"id": "notebookStatusErrorIcon.foreground",
		"desc": "The error icon color of notebook cells in the cell status bar."
	},
	{
		"section": "Notebook colors",
		"id": "notebookStatusRunningIcon.foreground",
		"desc": "The running icon color of notebook cells in the cell status bar."
	},
	{
		"section": "Notebook colors",
		"id": "notebookStatusSuccessIcon.foreground",
		"desc": "The success icon color of notebook cells in the cell status bar."
	},
	{
		"section": "Notebook colors",
		"id": "notebookEditorOverviewRuler.runningCellForeground",
		"desc": "The color of the running cell decoration in the notebook editor overview ruler."
	},
	{
		"section": "Chart colors",
		"id": "charts.foreground",
		"desc": "Contrast color for text in charts."
	},
	{
		"section": "Chart colors",
		"id": "charts.lines",
		"desc": "Color for lines in charts."
	},
	{
		"section": "Chart colors",
		"id": "charts.red",
		"desc": "Color for red elements in charts."
	},
	{
		"section": "Chart colors",
		"id": "charts.blue",
		"desc": "Color for blue elements in charts."
	},
	{
		"section": "Chart colors",
		"id": "charts.yellow",
		"desc": "Color for yellow elements in charts."
	},
	{
		"section": "Chart colors",
		"id": "charts.orange",
		"desc": "Color for orange elements in charts."
	},
	{
		"section": "Chart colors",
		"id": "charts.green",
		"desc": "Color for green elements in charts."
	},
	{
		"section": "Chart colors",
		"id": "charts.purple",
		"desc": "Color for purple elements in charts."
	},
	{
		"section": "Chart colors",
		"id": "chart.line",
		"desc": "Line color for the chart."
	},
	{
		"section": "Chart colors",
		"id": "chart.axis",
		"desc": "Axis color for the chart."
	},
	{
		"section": "Chart colors",
		"id": "chart.guide",
		"desc": "Guide line for the chart."
	},
	{
		"section": "Ports colors",
		"id": "ports.iconRunningProcessForeground",
		"desc": "The color of the icon for a port that has an associated running process."
	},
	{
		"section": "Comments View colors",
		"id": "commentsView.resolvedIcon",
		"desc": "Icon color for resolved comments."
	},
	{
		"section": "Comments View colors",
		"id": "commentsView.unresolvedIcon",
		"desc": "Icon color for unresolved comments."
	},
	{
		"section": "Action Bar colors",
		"id": "actionBar.toggledBackground",
		"desc": "Background color for toggled action items in action bar."
	},
	{
		"section": "Simple Find Widget colors",
		"id": "simpleFindWidget.sashBorder",
		"desc": "Border color of the sash border."
	},
	{
		"section": "Gauge colors",
		"id": "gauge.background",
		"desc": "Gauge background color."
	},
	{
		"section": "Gauge colors",
		"id": "gauge.foreground",
		"desc": "Gauge foreground color."
	},
	{
		"section": "Gauge colors",
		"id": "gauge.border",
		"desc": "Gauge border color."
	},
	{
		"section": "Gauge colors",
		"id": "gauge.warningBackground",
		"desc": "Gauge warning background color."
	},
	{
		"section": "Gauge colors",
		"id": "gauge.warningForeground",
		"desc": "Gauge warning foreground color."
	},
	{
		"section": "Gauge colors",
		"id": "gauge.errorBackground",
		"desc": "Gauge error background color."
	},
	{
		"section": "Gauge colors",
		"id": "gauge.errorForeground",
		"desc": "Gauge error foreground color."
	},
	{
		"section": "Markdown",
		"id": "markdownAlert.note.foreground",
		"desc": "Foreground color for note alerts in markdown."
	},
	{
		"section": "Markdown",
		"id": "markdownAlert.tip.foreground",
		"desc": "Foreground color for tip alerts in markdown."
	},
	{
		"section": "Markdown",
		"id": "markdownAlert.important.foreground",
		"desc": "Foreground color for important alerts in markdown."
	},
	{
		"section": "Markdown",
		"id": "markdownAlert.warning.foreground",
		"desc": "Foreground color for warning alerts in markdown."
	},
	{
		"section": "Markdown",
		"id": "markdownAlert.caution.foreground",
		"desc": "Foreground color for caution alerts in markdown."
	},
	{
		"section": "Agent Session colors",
		"id": "agentSessionReadIndicator.foreground",
		"desc": "Foreground color for the read indicator in an agent session."
	},
	{
		"section": "Agent Session colors",
		"id": "agentSessionSelectedBadge.border",
		"desc": "Border color for the badges in selected agent session items."
	},
	{
		"section": "Agent Session colors",
		"id": "agentSessionSelectedUnfocusedBadge.border",
		"desc": "Border color for the badges in selected agent session items when the view is unfocused."
	},
	{
		"section": "Agent Session colors",
		"id": "agentStatusIndicator.background",
		"desc": "Background color of the agent status indicator in the titlebar."
	},
	{
		"section": "Agent Session colors",
		"id": "aiCustomizationManagement.sashBorder",
		"desc": "The color of the Chat Customization Management editor splitview sash border."
	}
];
var ROLE_IDS = [
	"text",
	"comment",
	"doc",
	"keyword",
	"control",
	"operator",
	"string",
	"verbatim",
	"char",
	"escape",
	"regexp",
	"number",
	"constant",
	"function",
	"method",
	"type",
	"namespace",
	"variable",
	"parameter",
	"property",
	"tag",
	"attribute",
	"punctuation",
	"preprocessor",
	"import",
	"annotation",
	"label",
	"invalid",
	"warning",
	"info",
	"inserted",
	"deleted",
	"changed",
	"heading",
	"emphasis"
];
var ROLE_LABEL = {
	text: "Plain text",
	comment: "Comment",
	doc: "Documentation",
	keyword: "Keyword",
	control: "Control flow",
	operator: "Operator",
	string: "String",
	verbatim: "Verbatim string",
	char: "Character",
	escape: "Escape",
	regexp: "Regular expression",
	number: "Number",
	constant: "Constant",
	function: "Function",
	method: "Method / built-in",
	type: "Type",
	namespace: "Namespace",
	variable: "Variable",
	parameter: "Parameter",
	property: "Property",
	tag: "Tag",
	attribute: "Attribute",
	punctuation: "Punctuation",
	preprocessor: "Preprocessor",
	import: "Import",
	annotation: "Annotation",
	label: "Label",
	invalid: "Invalid",
	warning: "Warning",
	info: "Information",
	inserted: "Inserted",
	deleted: "Deleted",
	changed: "Changed",
	heading: "Heading",
	emphasis: "Emphasis"
};
var ROLE_GROUPS = [
	{
		id: "core",
		label: "Core",
		roles: [
			"text",
			"comment",
			"doc",
			"punctuation"
		]
	},
	{
		id: "language",
		label: "Language",
		roles: [
			"keyword",
			"control",
			"operator",
			"import",
			"preprocessor",
			"annotation"
		]
	},
	{
		id: "literal",
		label: "Literals",
		roles: [
			"string",
			"verbatim",
			"char",
			"escape",
			"regexp",
			"number",
			"constant"
		]
	},
	{
		id: "names",
		label: "Names",
		roles: [
			"function",
			"method",
			"type",
			"namespace",
			"variable",
			"parameter",
			"property",
			"tag",
			"attribute",
			"label"
		]
	},
	{
		id: "signal",
		label: "Signals & markup",
		roles: [
			"invalid",
			"warning",
			"info",
			"inserted",
			"deleted",
			"changed",
			"heading",
			"emphasis"
		]
	}
];
function defaultFlags(role) {
	return {
		bold: role === "keyword" || role === "control" || role === "heading" || role === "warning" || role === "invalid",
		italic: role === "comment" || role === "doc" || role === "emphasis" || role === "parameter",
		underline: role === "invalid",
		strike: role === "deleted"
	};
}
function styleFrom(role, color) {
	return {
		color,
		...defaultFlags(role)
	};
}
function tm(id, name, role, scopes, flags) {
	return {
		id,
		name,
		role,
		scopes,
		flags
	};
}
/** Every scope the built-in Dark / Dark+ themes style, plus the standard TextMate families. */
var TEXTMATE = [
	tm("embedded", "Embedded source", "text", [
		"meta.embedded",
		"source.groovy.embedded",
		"string meta.image.inline.markdown",
		"variable.legacy.builtin.python"
	]),
	tm("emphasis", "Emphasis", "emphasis", ["emphasis"], {
		italic: true,
		bold: false
	}),
	tm("strong", "Strong", "heading", ["strong"], {
		bold: true,
		italic: false
	}),
	tm("header", "Header", "heading", ["header"], { bold: true }),
	tm("comment", "Comment", "comment", ["comment"]),
	tm("comment-line", "Line comment", "comment", ["comment.line"]),
	tm("comment-block", "Block comment", "comment", ["comment.block"]),
	tm("comment-doc", "Documentation comment", "doc", ["comment.block.documentation"]),
	tm("constant-language", "Language constant", "constant", ["constant.language"]),
	tm("constant-numeric", "Number", "number", [
		"constant.numeric",
		"keyword.operator.plus.exponent",
		"keyword.operator.minus.exponent"
	]),
	tm("constant-float", "Float", "number", ["constant.numeric.float"]),
	tm("constant-hex", "Hex / base-n", "number", [
		"constant.numeric.hex",
		"constant.numeric.octal",
		"constant.numeric.binary"
	]),
	tm("constant-regexp", "Regexp constant", "regexp", ["constant.regexp"]),
	tm("constant-other", "Other constant", "constant", ["constant.other"]),
	tm("tag", "Tag name", "tag", ["entity.name.tag"]),
	tm("tag-css", "CSS tag", "attribute", ["entity.name.tag.css", "entity.name.tag.less"]),
	tm("attribute", "Attribute name", "attribute", ["entity.other.attribute-name"]),
	tm("attribute-css", "CSS class, id, pseudo", "attribute", [
		"entity.other.attribute-name.class.css",
		"source.css entity.other.attribute-name.class",
		"entity.other.attribute-name.id.css",
		"entity.other.attribute-name.parent-selector.css",
		"entity.other.attribute-name.parent.less",
		"source.css entity.other.attribute-name.pseudo-class",
		"entity.other.attribute-name.pseudo-element.css",
		"source.css.less entity.other.attribute-name.id",
		"entity.other.attribute-name.scss"
	]),
	tm("invalid", "Invalid", "invalid", ["invalid"]),
	tm("invalid-illegal", "Illegal", "invalid", ["invalid.illegal"], {
		underline: true,
		bold: true
	}),
	tm("invalid-deprecated", "Deprecated", "invalid", ["invalid.deprecated"], {
		strike: true,
		underline: false,
		bold: false
	}),
	tm("markup-underline", "Markup underline", "emphasis", ["markup.underline"], {
		underline: true,
		italic: false
	}),
	tm("markup-bold", "Markup bold", "heading", ["markup.bold"], { bold: true }),
	tm("markup-heading", "Markup heading", "heading", ["markup.heading"], { bold: true }),
	tm("markup-italic", "Markup italic", "emphasis", ["markup.italic"], { italic: true }),
	tm("markup-strike", "Markup strikethrough", "deleted", ["markup.strikethrough"], { strike: true }),
	tm("markup-inserted", "Inserted", "inserted", ["markup.inserted"]),
	tm("markup-deleted", "Deleted", "deleted", ["markup.deleted"]),
	tm("markup-changed", "Changed", "changed", ["markup.changed"]),
	tm("md-quote", "Markdown quote marker", "comment", ["punctuation.definition.quote.begin.markdown", "markup.quote"]),
	tm("md-list", "Markdown list marker", "keyword", ["punctuation.definition.list.begin.markdown"]),
	tm("md-raw", "Inline raw / code", "string", ["markup.inline.raw", "markup.fenced_code.block.markdown"]),
	tm("md-heading-punct", "Markdown heading punctuation", "heading", ["punctuation.definition.heading.markdown", "entity.name.section.markdown"]),
	tm("tag-punct", "Tag brackets", "punctuation", ["punctuation.definition.tag"]),
	tm("preprocessor", "Preprocessor", "preprocessor", ["meta.preprocessor", "entity.name.function.preprocessor"]),
	tm("preprocessor-string", "Preprocessor string", "string", ["meta.preprocessor.string"]),
	tm("preprocessor-number", "Preprocessor number", "number", ["meta.preprocessor.numeric"]),
	tm("dict-key", "Dictionary key", "property", ["meta.structure.dictionary.key.python", "meta.object-literal.key"]),
	tm("diff-header", "Diff header", "keyword", ["meta.diff.header", "meta.diff.range"]),
	tm("diff-deleted", "Diff deleted", "deleted", ["markup.deleted.diff", "punctuation.definition.deleted.diff"]),
	tm("diff-inserted", "Diff inserted", "inserted", ["markup.inserted.diff", "punctuation.definition.inserted.diff"]),
	tm("storage", "Storage", "keyword", ["storage"]),
	tm("storage-type", "Storage type", "type", ["storage.type"]),
	tm("storage-modifier", "Storage modifier", "keyword", ["storage.modifier", "keyword.operator.noexcept"]),
	tm("string", "String", "string", ["string", "meta.embedded.assembly"]),
	tm("string-quoted", "Quoted string", "string", [
		"string.quoted",
		"string.quoted.single",
		"string.quoted.double"
	]),
	tm("string-template", "Template string", "string", ["string.template", "string.interpolated"]),
	tm("string-tag", "String tag", "string", ["string.tag"]),
	tm("string-value", "String value", "string", ["string.value"]),
	tm("string-regexp", "String regexp", "regexp", ["string.regexp"]),
	tm("string-verbatim", "Verbatim / heredoc", "verbatim", ["string.unquoted.heredoc", "string.quoted.raw"]),
	tm("interp-punct", "Interpolation punctuation", "keyword", [
		"punctuation.definition.template-expression.begin",
		"punctuation.definition.template-expression.end",
		"punctuation.section.embedded"
	]),
	tm("interp-reset", "Interpolation body", "text", ["meta.template.expression"]),
	tm("css-property", "CSS property name", "attribute", [
		"support.type.vendored.property-name",
		"support.type.property-name",
		"source.css variable",
		"source.coffee.embedded"
	]),
	tm("css-value", "CSS property value", "string", [
		"support.constant.property-value",
		"support.constant.font-name",
		"support.constant.media-type",
		"support.constant.media",
		"constant.other.color.rgb-value",
		"constant.other.rgb-value",
		"support.constant.color"
	]),
	tm("keyword", "Keyword", "keyword", ["keyword"]),
	tm("keyword-other", "Other keyword", "keyword", ["keyword.other"]),
	tm("keyword-control", "Control keyword", "control", ["keyword.control"]),
	tm("keyword-flow", "Conditional, loop, return", "control", [
		"keyword.control.conditional",
		"keyword.control.loop",
		"keyword.control.flow",
		"keyword.control.return",
		"keyword.control.exception",
		"keyword.control.import"
	]),
	tm("keyword-import", "Import keyword", "import", ["keyword.control.import", "keyword.other.import"]),
	tm("operator", "Operator", "operator", ["keyword.operator"]),
	tm("operator-assign", "Assignment", "operator", ["keyword.operator.assignment"]),
	tm("operator-word", "Word operator", "keyword", [
		"keyword.operator.new",
		"keyword.operator.expression",
		"keyword.operator.cast",
		"keyword.operator.sizeof",
		"keyword.operator.alignof",
		"keyword.operator.typeid",
		"keyword.operator.alignas",
		"keyword.operator.instanceof",
		"keyword.operator.logical.python",
		"keyword.operator.wordlike",
		"keyword.operator.delete",
		"keyword.other.using",
		"keyword.other.directive.using",
		"keyword.other.operator",
		"entity.name.operator"
	]),
	tm("unit", "Unit", "number", ["keyword.other.unit"]),
	tm("php-embed", "PHP delimiters", "preprocessor", ["punctuation.section.embedded.begin.php", "punctuation.section.embedded.end.php"]),
	tm("git-rebase-fn", "Git rebase command", "function", ["support.function.git-rebase"]),
	tm("git-rebase-sha", "Git rebase SHA", "number", ["constant.sha.git-rebase"]),
	tm("java-import", "Java import / package", "import", [
		"storage.modifier.import.java",
		"variable.language.wildcard.java",
		"storage.modifier.package.java"
	]),
	tm("variable-language", "this / self", "keyword", ["variable.language"]),
	tm("function", "Function", "function", [
		"entity.name.function",
		"support.function",
		"support.constant.handlebars",
		"source.powershell variable.other.member",
		"entity.name.operator.custom-literal",
		"variable.function"
	]),
	tm("method", "Method", "method", [
		"entity.name.function.member",
		"entity.name.function.method",
		"entity.name.function.constructor",
		"support.function.builtin"
	]),
	tm("type", "Type", "type", [
		"support.class",
		"support.type",
		"entity.name.type",
		"entity.name.class",
		"entity.other.inherited-class",
		"storage.type.numeric.go",
		"storage.type.byte.go",
		"storage.type.boolean.go",
		"storage.type.string.go",
		"storage.type.uintptr.go",
		"storage.type.error.go",
		"storage.type.rune.go",
		"storage.type.cs",
		"storage.type.generic.cs",
		"storage.type.modifier.cs",
		"storage.type.variable.cs",
		"storage.type.annotation.java",
		"storage.type.generic.java",
		"storage.type.java",
		"storage.type.object.array.java",
		"storage.type.primitive.array.java",
		"storage.type.primitive.java",
		"storage.type.token.java",
		"storage.type.groovy",
		"storage.type.annotation.groovy",
		"storage.type.parameters.groovy",
		"storage.type.generic.groovy",
		"storage.type.object.array.groovy",
		"storage.type.primitive.array.groovy",
		"storage.type.primitive.groovy",
		"meta.type.cast.expr",
		"meta.type.new.expr",
		"support.constant.math",
		"support.constant.dom",
		"support.constant.json",
		"punctuation.separator.namespace.ruby"
	]),
	tm("namespace", "Namespace", "namespace", ["entity.name.namespace", "entity.name.scope-resolution"]),
	tm("control-extra", "Control / special keyword", "control", ["source.cpp keyword.operator.new", "keyword.control"]),
	tm("variable", "Variable", "variable", [
		"variable",
		"meta.definition.variable.name",
		"support.variable",
		"entity.name.variable",
		"constant.other.placeholder"
	]),
	tm("parameter", "Parameter", "parameter", ["variable.parameter"]),
	tm("property", "Property", "property", [
		"variable.other.property",
		"variable.other.member",
		"support.variable.property"
	]),
	tm("enum-member", "Enum member / constant variable", "constant", ["variable.other.constant", "variable.other.enummember"]),
	tm("regexp-group", "Regexp groups", "regexp", [
		"punctuation.definition.group.regexp",
		"punctuation.definition.group.assertion.regexp",
		"punctuation.definition.character-class.regexp",
		"punctuation.character.set.begin.regexp",
		"punctuation.character.set.end.regexp",
		"keyword.operator.negation.regexp",
		"support.other.parenthesis.regexp"
	]),
	tm("regexp-class", "Regexp character class", "escape", [
		"constant.character.character-class.regexp",
		"constant.other.character-class.set.regexp",
		"constant.other.character-class.regexp",
		"constant.character.set.regexp"
	]),
	tm("regexp-or", "Regexp alternation / anchor", "operator", ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"]),
	tm("regexp-quant", "Regexp quantifier", "number", ["keyword.operator.quantifier.regexp"]),
	tm("char", "Character", "char", ["constant.character", "constant.other.option"]),
	tm("escape", "Escape", "escape", ["constant.character.escape"]),
	tm("label", "Label", "label", ["entity.name.label"]),
	tm("annotation", "Annotation / decorator", "annotation", [
		"entity.other.attribute",
		"entity.name.function.decorator",
		"punctuation.definition.decorator",
		"meta.decorator"
	]),
	tm("punctuation", "Punctuation", "punctuation", ["punctuation"]),
	tm("punct-string", "String punctuation", "punctuation", [
		"punctuation.definition.string",
		"punctuation.definition.string.begin",
		"punctuation.definition.string.end"
	]),
	tm("punct-comment", "Comment punctuation", "punctuation", ["punctuation.definition.comment"]),
	tm("punct-separator", "Separator", "punctuation", ["punctuation.separator", "punctuation.accessor"]),
	tm("punct-brace", "Braces", "punctuation", ["meta.brace"]),
	tm("support-constant", "Support constant", "constant", ["support.constant"]),
	tm("support-class", "Support class", "type", ["support.class"])
];
function sem(id, label, detail, role, extra) {
	return {
		id,
		label,
		detail,
		role,
		...extra
	};
}
var SEMANTIC = [
	sem("namespace", "namespace", "Namespace, module, or package", "namespace"),
	sem("class", "class", "Class type", "type"),
	sem("enum", "enum", "Enumeration type", "type"),
	sem("interface", "interface", "Interface type", "type"),
	sem("struct", "struct", "Struct type", "type"),
	sem("typeParameter", "typeParameter", "Type parameter", "type"),
	sem("type", "type", "Other type", "type"),
	sem("parameter", "parameter", "Function or method parameter", "parameter"),
	sem("variable", "variable", "Local or global variable", "variable"),
	sem("property", "property", "Member property or field", "property"),
	sem("enumMember", "enumMember", "Enumeration member", "constant"),
	sem("decorator", "decorator", "Decorator or annotation", "annotation"),
	sem("event", "event", "Event property", "annotation"),
	sem("function", "function", "Function", "function"),
	sem("method", "method", "Member function", "method"),
	sem("macro", "macro", "Macro", "preprocessor"),
	sem("label", "label", "Label", "label"),
	sem("comment", "comment", "Comment", "comment"),
	sem("string", "string", "String literal", "string"),
	sem("keyword", "keyword", "Language keyword", "keyword"),
	sem("number", "number", "Number literal", "number"),
	sem("regexp", "regexp", "Regular expression", "regexp"),
	sem("operator", "operator", "Operator", "operator"),
	sem("newOperator", "newOperator", "Built-in JS/TS new operator", "keyword"),
	sem("stringLiteral", "stringLiteral", "Built-in JS/TS string literal", "string"),
	sem("customLiteral", "customLiteral", "Built-in JS/TS custom literal", "function"),
	sem("numberLiteral", "numberLiteral", "Built-in JS/TS number literal", "number"),
	sem("*.declaration", "Any declaration", "Modifier: declaration", "text", {
		styleOnly: true,
		flags: { bold: true }
	}),
	sem("*.definition", "Any definition", "Modifier: definition", "text", {
		styleOnly: true,
		flags: { bold: true }
	}),
	sem("*.readonly", "Any readonly", "Modifier: readonly", "constant"),
	sem("*.static", "Any static", "Modifier: static", "text", {
		styleOnly: true,
		flags: { italic: true }
	}),
	sem("*.deprecated", "Any deprecated", "Modifier: deprecated", "text", {
		styleOnly: true,
		flags: { strike: true }
	}),
	sem("*.abstract", "Any abstract", "Modifier: abstract", "text", {
		styleOnly: true,
		flags: { italic: true }
	}),
	sem("*.async", "Any async", "Modifier: async", "text", {
		styleOnly: true,
		flags: { italic: true }
	}),
	sem("*.modification", "Any modification", "Modifier: modification", "text", {
		styleOnly: true,
		flags: { underline: true }
	}),
	sem("*.documentation", "Any documentation", "Modifier: documentation", "doc"),
	sem("*.defaultLibrary", "Any default library", "Modifier: defaultLibrary", "method"),
	sem("variable.readonly", "Readonly variable", "variable + readonly", "constant"),
	sem("property.readonly", "Readonly property", "property + readonly", "constant"),
	sem("variable.defaultLibrary", "Library variable", "variable + defaultLibrary", "method"),
	sem("function.declaration", "Function declaration", "function + declaration", "function", { flags: { bold: true } }),
	sem("method.declaration", "Method declaration", "method + declaration", "method", { flags: { bold: true } }),
	sem("class.declaration", "Class declaration", "class + declaration", "type", { flags: { bold: true } }),
	sem("class.defaultLibrary", "Library class", "class + defaultLibrary", "method"),
	sem("parameter.declaration", "Parameter declaration", "parameter + declaration", "parameter"),
	sem("enumMember.readonly", "Enum member", "enumMember + readonly", "constant")
];
var KATE_STYLES = [
	[
		"Normal",
		"Plain text and unscoped source",
		"text"
	],
	[
		"Keyword",
		"Language keywords",
		"keyword"
	],
	[
		"Function",
		"Function definitions and calls",
		"function"
	],
	[
		"Variable",
		"Variables, such as $foo",
		"variable"
	],
	[
		"ControlFlow",
		"if, else, return, continue",
		"control"
	],
	[
		"Operator",
		"Operators such as + - * / ::",
		"operator"
	],
	[
		"BuiltIn",
		"Built-in classes and functions",
		"method"
	],
	[
		"Extension",
		"Known extensions, such as Qt or Boost",
		"namespace"
	],
	[
		"Preprocessor",
		"Preprocessor statements",
		"preprocessor"
	],
	[
		"Attribute",
		"Attributes, @override, __declspec",
		"annotation"
	],
	[
		"Char",
		"Single characters such as 'a'",
		"char"
	],
	[
		"SpecialChar",
		"Escapes such as \\n",
		"escape"
	],
	[
		"String",
		"Strings",
		"string"
	],
	[
		"VerbatimString",
		"Verbatim strings and heredocs",
		"verbatim"
	],
	[
		"SpecialString",
		"Special strings, regexes, math mode",
		"regexp"
	],
	[
		"Import",
		"Includes, imports, modules, packages",
		"import"
	],
	[
		"DataType",
		"Data types such as int, char, float",
		"type"
	],
	[
		"DecVal",
		"Decimal values",
		"number"
	],
	[
		"BaseN",
		"Numbers with a base other than 10",
		"number"
	],
	[
		"Float",
		"Floating-point numbers",
		"number"
	],
	[
		"Constant",
		"Constants such as True, None, nullptr",
		"constant"
	],
	[
		"Comment",
		"Comments",
		"comment"
	],
	[
		"Documentation",
		"API documentation comments",
		"doc"
	],
	[
		"Annotation",
		"Annotations inside comments",
		"annotation"
	],
	[
		"CommentVar",
		"Variables referenced in comments",
		"parameter"
	],
	[
		"RegionMarker",
		"Region markers such as BEGIN/END",
		"label"
	],
	[
		"Information",
		"Information notes, such as \\note",
		"info"
	],
	[
		"Warning",
		"Warnings, such as \\warning",
		"warning"
	],
	[
		"Alert",
		"Comment alerts such as TODO",
		"warning"
	],
	[
		"Error",
		"Wrong syntax",
		"invalid"
	],
	[
		"Others",
		"Styles that match nothing else",
		"constant"
	]
];
var KATE_EDITOR_COLORS = [
	{
		id: "BackgroundColor",
		desc: "Background of the editing area"
	},
	{
		id: "TextSelection",
		desc: "Background of selected text"
	},
	{
		id: "CurrentLine",
		desc: "Background of the current line"
	},
	{
		id: "SearchHighlight",
		desc: "Background of search matches"
	},
	{
		id: "ReplaceHighlight",
		desc: "Background of replace matches"
	},
	{
		id: "BracketMatching",
		desc: "Background of matching brackets and quotes"
	},
	{
		id: "TabMarker",
		desc: "Tabs and trailing whitespace"
	},
	{
		id: "SpellChecking",
		desc: "Spell-check underline"
	},
	{
		id: "IndentationLine",
		desc: "Indentation guide"
	},
	{
		id: "IconBorder",
		desc: "Icon border background"
	},
	{
		id: "CodeFolding",
		desc: "Code folding marker"
	},
	{
		id: "LineNumbers",
		desc: "Line number foreground"
	},
	{
		id: "CurrentLineNumber",
		desc: "Current line number foreground"
	},
	{
		id: "WordWrapMarker",
		desc: "Dynamic wrap marker in the icon border"
	},
	{
		id: "ModifiedLines",
		desc: "Changed-line marker"
	},
	{
		id: "SavedLines",
		desc: "Saved-line marker"
	},
	{
		id: "Separator",
		desc: "Column ruler, such as column 80"
	},
	{
		id: "MarkBookmark",
		desc: "Bookmark mark"
	},
	{
		id: "MarkBreakpointActive",
		desc: "Active breakpoint"
	},
	{
		id: "MarkBreakpointReached",
		desc: "Reached breakpoint"
	},
	{
		id: "MarkBreakpointDisabled",
		desc: "Disabled breakpoint"
	},
	{
		id: "MarkExecution",
		desc: "Current execution position"
	},
	{
		id: "MarkWarning",
		desc: "Warning mark"
	},
	{
		id: "MarkError",
		desc: "Error mark"
	},
	{
		id: "TemplateBackground",
		desc: "Snippet template background"
	},
	{
		id: "TemplatePlaceholder",
		desc: "Editable snippet placeholder"
	},
	{
		id: "TemplateFocusedPlaceholder",
		desc: "Active snippet placeholder"
	},
	{
		id: "TemplateReadOnlyPlaceholder",
		desc: "Read-only snippet placeholder"
	}
];
/** Colors that flatten syntax when set. Exported only if the user pins them, or in high contrast. */
var OMIT_UNLESS_PINNED = /* @__PURE__ */ new Set(["editor.selectionForeground", "terminal.selectionForeground"]);
var HEX = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
function clamp(n, min, max) {
	return Math.min(max, Math.max(min, n));
}
function parseHex(input) {
	let s = input.trim();
	if (!s) return null;
	if (!s.startsWith("#")) s = `#${s}`;
	if (!HEX.test(s)) return null;
	let h = s.slice(1);
	if (h.length <= 4) h = [...h].map((c) => c + c).join("");
	return {
		r: parseInt(h.slice(0, 2), 16),
		g: parseInt(h.slice(2, 4), 16),
		b: parseInt(h.slice(4, 6), 16),
		a: h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1
	};
}
function mustHex(input, fallback = "#888888") {
	return parseHex(input) ?? parseHex(fallback);
}
function rgb(r, g, b, a = 1) {
	return {
		r,
		g,
		b,
		a
	};
}
function toHex({ r, g, b, a }) {
	const c = (n) => Math.round(clamp(n, 0, 255)).toString(16).padStart(2, "0");
	const base = `#${c(r)}${c(g)}${c(b)}`;
	if (a >= .999) return base;
	return base + c(a * 255);
}
function withAlpha(c, a) {
	return {
		...c,
		a: clamp(a, 0, 1)
	};
}
function mix(a, b, t) {
	return {
		r: a.r + (b.r - a.r) * t,
		g: a.g + (b.g - a.g) * t,
		b: a.b + (b.b - a.b) * t,
		a: a.a + (b.a - a.a) * t
	};
}
function flatten(c, bg) {
	const a = clamp(c.a, 0, 1);
	return {
		r: c.r * a + bg.r * (1 - a),
		g: c.g * a + bg.g * (1 - a),
		b: c.b * a + bg.b * (1 - a),
		a: 1
	};
}
function luminance(c) {
	const f = (v) => {
		const s = v / 255;
		return s <= .03928 ? s / 12.92 : ((s + .055) / 1.055) ** 2.4;
	};
	return .2126 * f(c.r) + .7152 * f(c.g) + .0722 * f(c.b);
}
function contrast(a, b) {
	const L1 = luminance(a.a < .999 ? flatten(a, b) : a);
	const L2 = luminance(b);
	const hi = Math.max(L1, L2);
	const lo = Math.min(L1, L2);
	return (hi + .05) / (lo + .05);
}
function rgbToHsl(c) {
	const r = c.r / 255;
	const g = c.g / 255;
	const b = c.b / 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const l = (max + min) / 2;
	let h = 0;
	let s = 0;
	if (max !== min) {
		const d = max - min;
		s = l > .5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			default: h = (r - g) / d + 4;
		}
		h *= 60;
	}
	return {
		h,
		s,
		l
	};
}
function hsl(h, s, l, a = 1) {
	const hh = (h % 360 + 360) % 360;
	const ss = clamp(s, 0, 100) / 100;
	const ll = clamp(l, 0, 100) / 100;
	const c = (1 - Math.abs(2 * ll - 1)) * ss;
	const x = c * (1 - Math.abs(hh / 60 % 2 - 1));
	const m = ll - c / 2;
	let r = 0;
	let g = 0;
	let b = 0;
	if (hh < 60) [r, g, b] = [
		c,
		x,
		0
	];
	else if (hh < 120) [r, g, b] = [
		x,
		c,
		0
	];
	else if (hh < 180) [r, g, b] = [
		0,
		c,
		x
	];
	else if (hh < 240) [r, g, b] = [
		0,
		x,
		c
	];
	else if (hh < 300) [r, g, b] = [
		x,
		0,
		c
	];
	else [r, g, b] = [
		c,
		0,
		x
	];
	return {
		r: (r + m) * 255,
		g: (g + m) * 255,
		b: (b + m) * 255,
		a
	};
}
function onColor(bg) {
	return luminance(bg) > .42 ? rgb(22, 24, 18) : rgb(247, 244, 234);
}
function ensureContrast(fg, bg, min = 4.5) {
	if (contrast(fg, bg) >= min) return fg;
	const { h, s } = rgbToHsl(fg);
	const dir = luminance(bg) > .45 ? -1 : 1;
	let l = rgbToHsl(fg).l;
	let best = fg;
	for (let i = 0; i < 28; i++) {
		l = clamp(l + dir * .03, .02, .98);
		best = hsl(h, Math.max(s * 100, 18), l * 100, fg.a);
		if (contrast(best, bg) >= min) return best;
	}
	return dir > 0 ? rgb(245, 244, 238, fg.a) : rgb(18, 18, 16, fg.a);
}
function opaque$1(input) {
	const c = parseHex(input);
	if (!c) return "#888888";
	return toHex({
		...c,
		a: 1
	});
}
function alphaOf(input) {
	return parseHex(input)?.a ?? 1;
}
function setAlpha(input, a) {
	const c = parseHex(input);
	if (!c) return input;
	return toHex(withAlpha(c, a));
}
function isDark(appearance) {
	return appearance === "dark" || appearance === "hc";
}
function isHc(appearance) {
	return appearance === "hc" || appearance === "hcLight";
}
function fontStyleOf(style) {
	const parts = [];
	if (style.italic) parts.push("italic");
	if (style.bold) parts.push("bold");
	if (style.underline) parts.push("underline");
	if (style.strike) parts.push("strikethrough");
	return parts.join(" ");
}
function slugify(name) {
	return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "theme";
}
var BLACK = rgb(0, 0, 0);
var WHITE = rgb(255, 255, 255);
function makePalette(appearance, bgHex, fgHex, accentHex, accent2Hex, roles) {
	const dark = isDark(appearance);
	const hc = isHc(appearance);
	const bg = mustHex(bgHex);
	const fg = mustHex(fgHex);
	const accent = mustHex(accentHex);
	const accent2 = mustHex(accent2Hex);
	const shell = dark ? mix(bg, BLACK, .42) : mix(bg, BLACK, .055);
	const sunken = dark ? mix(bg, BLACK, .22) : mix(bg, BLACK, .035);
	const raised = dark ? mix(bg, WHITE, .075) : mix(bg, WHITE, .55);
	const overlay = dark ? mix(bg, WHITE, .09) : mix(bg, BLACK, .045);
	const widget = dark ? mix(bg, WHITE, .055) : mix(bg, WHITE, .72);
	const hover = dark ? mix(bg, WHITE, .07) : mix(bg, BLACK, .05);
	const border = flatten(withAlpha(fg, hc ? .5 : dark ? .16 : .14), bg);
	const muted = mix(fg, bg, .48);
	const faint = mix(fg, bg, .72);
	const inactiveFg = mix(fg, bg, .4);
	const disabledFg = mix(fg, bg, .62);
	const onAccent = onColor(accent);
	const onAccent2 = onColor(accent2);
	const selection = withAlpha(accent, hc ? .62 : dark ? .34 : .28);
	const find = withAlpha(accent2, hc ? .7 : .55);
	const findSoft = withAlpha(accent2, hc ? .4 : .28);
	const hue = rgbToHsl(accent).h;
	const error = hsl(4, dark ? 78 : 62, dark ? 68 : 40);
	const warning = hsl(38, dark ? 85 : 70, dark ? 64 : 36);
	const success = hsl(152, dark ? 52 : 48, dark ? 58 : 32);
	const info = hsl(hue, 62, dark ? 68 : 40);
	const ansiBase = {
		Black: dark ? mix(bg, BLACK, .35) : rgb(28, 30, 26),
		Red: error,
		Green: success,
		Yellow: warning,
		Blue: hsl(hue, 58, dark ? 66 : 42),
		Magenta: hsl((hue + 300) % 360, 52, dark ? 70 : 42),
		Cyan: hsl(178, 48, dark ? 62 : 34),
		White: dark ? mix(fg, WHITE, .15) : mix(fg, BLACK, .15)
	};
	const ansi = {};
	for (const [name, color] of Object.entries(ansiBase)) {
		ansi[`ansi${name}`] = toHex(color);
		const bright = dark ? mix(color, WHITE, .28) : mix(color, BLACK, .12);
		ansi[`ansiBright${name}`] = toHex(name === "Black" ? muted : bright);
	}
	return {
		dark,
		hc,
		bg,
		fg,
		accent,
		accent2,
		muted,
		faint,
		border,
		shell,
		sunken,
		raised,
		overlay,
		widget,
		hover,
		onAccent,
		onAccent2,
		selection,
		find,
		findSoft,
		error,
		warning,
		success,
		info,
		inactiveFg,
		disabledFg,
		black: BLACK,
		white: WHITE,
		role: roles,
		ansi
	};
}
function hex(c) {
	return toHex(c);
}
function a(c, alpha, onto) {
	const next = withAlpha(c, alpha);
	return onto ? hex(flatten(next, onto)) : hex(next);
}
function toneOf(id) {
	const s = id.toLowerCase();
	if (/error|invalid|deleted|removed|conflict|failed|errored|uncovered|deletions|stopforeground|disconnect/.test(s)) return "error";
	if (/warning|deprecated/.test(s)) return "warning";
	if (/success|added|inserted|passed|untracked|addition|savedline|incoming/.test(s)) return "success";
	if (/infoforeground|infobackground|infoborder|infohighlight|\.info|hintforeground|hintborder/.test(s)) return "info";
	return "neutral";
}
function toneColor(p, tone) {
	if (tone === "error") return p.error;
	if (tone === "warning") return p.warning;
	if (tone === "success") return p.success;
	if (tone === "info") return p.info;
	return p.fg;
}
function symbolColor(leaf, p) {
	const role = {
		arrayForeground: "variable",
		booleanForeground: "constant",
		classForeground: "type",
		colorForeground: "string",
		constantForeground: "constant",
		constructorForeground: "method",
		enumeratorForeground: "type",
		enumeratorMemberForeground: "constant",
		eventForeground: "annotation",
		fieldForeground: "property",
		fileForeground: "text",
		folderForeground: "keyword",
		functionForeground: "function",
		interfaceForeground: "type",
		keyForeground: "property",
		keywordForeground: "keyword",
		methodForeground: "method",
		moduleForeground: "namespace",
		namespaceForeground: "namespace",
		nullForeground: "constant",
		numberForeground: "number",
		objectForeground: "variable",
		operatorForeground: "operator",
		packageForeground: "namespace",
		propertyForeground: "property",
		referenceForeground: "variable",
		snippetForeground: "string",
		stringForeground: "string",
		structForeground: "type",
		textForeground: "text",
		typeParameterForeground: "type",
		unitForeground: "number",
		variableForeground: "variable"
	}[leaf];
	if (role) return p.role[role].color;
	return hex(p.fg);
}
function chartColor(leaf, p) {
	const hue = rgbToHsl(p.accent).h;
	return hex({
		red: p.error,
		orange: hsl(28, 78, p.dark ? 62 : 42),
		yellow: p.warning,
		green: p.success,
		blue: hsl(hue, 60, p.dark ? 64 : 42),
		purple: hsl((hue + 70) % 360, 46, p.dark ? 68 : 40),
		foreground: p.fg,
		lines: p.border,
		line: p.accent,
		axis: p.muted,
		guide: p.faint
	}[leaf] ?? p.accent);
}
function terminalSymbol(leaf, p) {
	if (/error|deleted/.test(leaf)) return hex(p.error);
	if (/success|done/.test(leaf)) return hex(p.success);
	if (/branch|commit|tag|remote/.test(leaf)) return hex(p.accent);
	if (/method/.test(leaf)) return p.role.method.color;
	if (/folder|file|alias|argument|option|flag/.test(leaf)) return p.role.variable.color;
	if (/stash|pull/.test(leaf)) return p.role.constant.color;
	return hex(p.fg);
}
function debugIcon(leaf, p) {
	if (/disabled|unverified/.test(leaf)) return hex(p.muted);
	if (/breakpointCurrent|pause/.test(leaf)) return hex(p.warning);
	if (/breakpoint|stop|disconnect/.test(leaf)) return hex(p.error);
	if (/start|continue/.test(leaf)) return hex(p.success);
	if (/restart|step/.test(leaf)) return hex(p.accent);
	return hex(p.fg);
}
function gitColor(id, p) {
	const s = id.toLowerCase();
	if (/ignored/.test(s)) return hex(p.faint);
	if (/conflict|deleted|submodule/.test(s)) return /submodule/.test(s) ? hex(p.accent) : hex(p.error);
	if (/added|untracked|renamed/.test(s)) return /renamed/.test(s) ? hex(p.info) : hex(p.success);
	if (/modified|stage/.test(s)) return hex(p.warning);
	if (/addition/.test(s)) return hex(p.success);
	if (/deletion/.test(s)) return hex(p.error);
	return hex(p.fg);
}
function paintColor(id, p) {
	const leaf = id.split(".").pop() ?? id;
	const s = id.toLowerCase();
	if (id.startsWith("terminal.ansi") || /^ansi(Bright)?(Black|Red|Green|Yellow|Blue|Magenta|Cyan|White)$/.test(leaf)) return p.ansi[leaf] ?? hex(p.fg);
	if (id.startsWith("symbolIcon.")) return symbolColor(leaf, p);
	if (id.startsWith("charts.") || id.startsWith("chart.")) return chartColor(leaf, p);
	if (id.startsWith("debugIcon.")) return debugIcon(leaf, p);
	if (id.startsWith("gitDecoration.") || id.includes("historyItemHoverAdditions") || id.includes("historyItemHoverDeletions") || id.includes("historyItem")) {
		if (id.startsWith("gitDecoration.") || /Additions|Deletions/.test(id)) return gitColor(id, p);
	}
	if (id.startsWith("terminalSymbolIcon.")) return terminalSymbol(leaf, p);
	if (id.startsWith("debugTokenExpression.")) {
		if (leaf === "string") return p.role.string.color;
		if (leaf === "number") return p.role.number.color;
		if (leaf === "boolean") return p.role.constant.color;
		if (leaf === "error") return hex(p.error);
		if (leaf === "type") return p.role.type.color;
		if (leaf === "name") return p.role.variable.color;
		return hex(p.fg);
	}
	if (id === "contrastBorder" || id === "contrastActiveBorder") return p.hc ? hex(p.fg) : "#00000000";
	if (id === "focusBorder" || id === "sash.hoverBorder") return hex(p.accent);
	if (id === "foreground") return hex(p.fg);
	if (id === "disabledForeground") return hex(p.disabledFg);
	if (id === "descriptionForeground") return hex(p.muted);
	if (id === "errorForeground") return hex(p.error);
	if (id === "icon.foreground") return hex(p.muted);
	if (id === "widget.border") return hex(p.border);
	if (id === "widget.shadow") return a(BLACK, p.dark ? .45 : .18);
	if (id === "selection.background") return hex(p.selection);
	if (/shadow$/i.test(leaf)) return a(BLACK, p.dark ? .4 : .16);
	const tone = toneOf(id);
	const toneInk = toneColor(p, tone);
	if (id.startsWith("editorBracketHighlight.")) {
		if (s.includes("unexpected")) return hex(p.error);
		const n = Number(leaf.replace(/\D/g, "")) || 1;
		const cycle = [
			p.accent,
			p.accent2,
			p.success,
			p.warning,
			p.info,
			p.error
		];
		return hex(cycle[(n - 1) % cycle.length]);
	}
	if (id.startsWith("editorBracketPairGuide.")) {
		const n = Number(leaf.replace(/\D/g, "")) || 1;
		return a(p.fg, p.hc ? .35 : .08 + n * .025);
	}
	if (id.startsWith("editorIndentGuide.")) return s.includes("active") ? hex(p.muted) : a(p.fg, p.hc ? .45 : .14);
	if (id.startsWith("button.")) {
		const secondary = s.includes("secondary");
		const ink = secondary ? p.fg : p.onAccent;
		const fill = secondary ? p.raised : p.accent;
		if (s.includes("separator")) return a(p.onAccent, .35);
		if (s.includes("foreground")) return hex(ink);
		if (s.includes("border")) return secondary ? hex(p.border) : hex(mix(fill, p.bg, .15));
		if (s.includes("hover")) return hex(mix(fill, p.white, p.dark ? .12 : .18));
		return hex(fill);
	}
	if (id.startsWith("badge") || id.startsWith("activityBarBadge") || id.startsWith("activityWarningBadge") || id.startsWith("activityErrorBadge") || id.startsWith("panelTitleBadge")) {
		const fill = s.includes("warning") ? p.warning : s.includes("error") ? p.error : p.accent;
		if (s.includes("foreground")) return hex(onColor(fill));
		return hex(fill);
	}
	if (id.startsWith("textLink")) return hex(p.accent);
	if (id.startsWith("textPreformat")) {
		if (s.includes("foreground")) return p.role.string.color;
		if (s.includes("border")) return hex(p.border);
		return hex(p.sunken);
	}
	if (id.startsWith("textBlockQuote")) {
		if (s.includes("border")) return hex(p.accent);
		return hex(p.sunken);
	}
	if (id.startsWith("textSeparator") || id.startsWith("textCodeBlock")) return s.includes("background") ? hex(p.sunken) : hex(p.muted);
	if (id.startsWith("input.") || id.startsWith("dropdown") || id.startsWith("checkbox") || id.startsWith("radio")) {
		if (s.includes("foreground") || s.includes("placeholder")) return s.includes("placeholder") || s.includes("inactive") || s.includes("disabled") ? hex(p.muted) : hex(p.fg);
		if (s.includes("border")) return s.includes("focus") || s.includes("active") ? hex(p.accent) : hex(p.border);
		if (s.includes("hover")) return hex(p.hover);
		return hex(p.widget);
	}
	if (id.startsWith("list.") || id.startsWith("listFilter") || id.startsWith("tree.")) {
		if (s.includes("err")) return hex(p.error);
		if (s.includes("warning")) return hex(p.warning);
		if (s.includes("highlightforeground") || s.includes("filtermatch")) return s.includes("border") ? hex(p.accent) : hex(p.find);
		if (s.includes("invalid")) return hex(p.error);
		if (s.includes("deemphasized")) return hex(p.faint);
		if (s.includes("indent") || s.includes("border") || s.includes("outline") || s.includes("stroke")) return s.includes("focus") || s.includes("active") ? hex(p.accent) : hex(p.border);
		if (s.includes("shadow")) return a(BLACK, .35);
		if (s.includes("drop")) return hex(p.selection);
		if (s.includes("foreground") || s.includes("iconforeground")) {
			if (s.includes("activeselection") || s.includes("focus") && !s.includes("inactive")) return hex(p.onAccent);
			if (s.includes("inactive")) return hex(p.inactiveFg);
			return hex(p.fg);
		}
		if (s.includes("activeselection") || s.includes("focusbackground") && !s.includes("inactive")) return hex(p.accent);
		if (s.includes("inactiveselection") || s.includes("inactivefocus")) return a(p.accent, .28, p.sunken);
		if (s.includes("hover")) return hex(p.hover);
		if (s.includes("odd")) return a(p.fg, .04, p.bg);
		return hex(p.sunken);
	}
	if (id.startsWith("activityBar") || id.startsWith("activityBarTop") || id.startsWith("modernActivityBar")) {
		if (s.includes("badge")) return s.includes("foreground") ? hex(p.onAccent) : hex(p.accent);
		if (s.includes("foreground")) {
			if (s.includes("inactive") || s.includes("hover") && s.includes("modern")) return s.includes("active") ? hex(p.fg) : hex(p.inactiveFg);
			if (s.includes("active") || s.includes("hover")) return hex(p.fg);
			return hex(p.inactiveFg);
		}
		if (s.includes("border") || s.includes("dropborder")) return s.includes("active") || s.includes("focus") ? hex(p.accent) : hex(p.border);
		if (s.includes("activebackground") || s.includes("hoverbackground")) return hex(p.overlay);
		if (s.includes("inactive")) return hex(mix(p.shell, BLACK, .15));
		return hex(p.shell);
	}
	if (id.startsWith("sideBar") || id.startsWith("auxiliaryBar") || id.startsWith("panel") || id.startsWith("banner")) {
		if (tone !== "neutral" && (s.includes("foreground") || s.includes("border"))) return hex(toneInk);
		if (s.includes("badge")) return s.includes("foreground") ? hex(p.onAccent) : hex(p.accent);
		if (s.includes("foreground")) return s.includes("inactive") ? hex(p.inactiveFg) : s.includes("title") ? hex(p.fg) : hex(p.fg);
		if (s.includes("border") || s.includes("drop")) return s.includes("active") || s.includes("drop") ? hex(p.accent) : hex(p.border);
		if (s.includes("shadow")) return a(BLACK, .35);
		if (s.includes("header") || s.includes("sectionheader")) return hex(p.dark ? mix(p.sunken, BLACK, .2) : p.sunken);
		if (id.startsWith("banner")) return s.includes("foreground") ? hex(p.onAccent) : hex(p.accent);
		return hex(p.sunken);
	}
	if (id.startsWith("titleBar") || id.startsWith("menu") || id.startsWith("menubar") || id.startsWith("commandCenter")) {
		if (s.includes("selection") || s.includes("activebackground")) return hex(p.accent);
		if (s.includes("foreground")) return s.includes("inactive") ? hex(p.inactiveFg) : s.includes("selection") ? hex(p.onAccent) : hex(p.fg);
		if (s.includes("border") || s.includes("separator")) return hex(p.border);
		if (s.includes("inactive")) return hex(mix(p.shell, p.bg, .4));
		return hex(id.startsWith("menu") ? p.widget : p.shell);
	}
	if (id.startsWith("tab.") || id.startsWith("modernTab") || id.startsWith("modernEditorTab") || id.startsWith("editorGroup")) {
		if (s.includes("modified")) return hex(p.warning);
		if (s.includes("foreground")) {
			if (s.includes("inactive") || s.includes("unfocused")) return hex(p.inactiveFg);
			return hex(p.fg);
		}
		if (s.includes("bordertop") || s.includes("activeborder") || s.includes("selectedborder")) return hex(p.accent);
		if (s.includes("border") || s.includes("drop")) return s.includes("drag") || s.includes("focus") || s.includes("drop") ? hex(p.accent) : hex(p.border);
		if (s.includes("hover")) return hex(p.hover);
		if (s.includes("inactive") || s.includes("unfocusedinactive") || s.includes("notabs") || s.includes("tabsbackground") || s.includes("empty")) return hex(p.sunken);
		if (s.includes("active") || s.includes("selected")) return hex(p.bg);
		return hex(p.sunken);
	}
	if (id.startsWith("editorGroupHeader") || id === "editorPane.background") {
		if (s.includes("border")) return hex(p.border);
		if (s.includes("notabs") || s.includes("tabs")) return hex(p.sunken);
		return hex(p.bg);
	}
	if (id.startsWith("sideBySideEditor")) return hex(p.border);
	if (id.startsWith("statusBar")) {
		const fill = s.includes("debugging") ? p.info : s.includes("nofolder") ? p.warning : s.includes("error") ? p.error : s.includes("warning") ? p.warning : s.includes("offline") ? p.muted : s.includes("remote") || s.includes("prominent") ? p.accent2 : p.accent;
		if (s.includes("foreground") || s.includes("hoverforeground")) return hex(onColor(fill));
		if (s.includes("border") || s.includes("focus")) return s.includes("focus") ? hex(p.onAccent) : a(onColor(fill), .25, fill);
		if (s.includes("hoverbackground") || s.includes("activebackground")) return hex(mix(fill, p.white, .14));
		if (s.includes("compact")) return a(p.white, .08, fill);
		if (!s.includes("background") && s.includes("item")) return hex(onColor(p.accent));
		return hex(fill);
	}
	if (id.startsWith("terminal.")) {
		if (s.includes("findmatch") && !s.includes("highlight")) return s.includes("border") ? hex(p.accent2) : hex(p.find);
		if (s.includes("findmatchhighlight")) return s.includes("border") ? a(p.accent2, .5) : hex(p.findSoft);
		if (s.includes("selection")) return s.includes("foreground") ? hex(p.fg) : hex(p.selection);
		if (s.includes("border") || s.includes("guide")) return hex(p.border);
		if (s.includes("cursor")) return s.includes("background") ? hex(p.bg) : hex(p.accent);
		if (s.includes("initialhint")) return hex(p.muted);
		if (s.includes("hover")) return hex(p.hover);
		if (s.includes("drop")) return hex(p.selection);
		if (s.includes("success")) return hex(p.success);
		if (s.includes("error")) return hex(p.error);
		if (s.includes("foreground")) return hex(p.fg);
		if (s.includes("decoration")) return hex(p.muted);
		return hex(mix(p.bg, BLACK, p.dark ? .18 : .04));
	}
	if (id.startsWith("terminalCursor")) return s.includes("background") ? hex(p.bg) : hex(p.accent);
	if (id.startsWith("terminalSticky") || id.startsWith("terminalOverview") || id.startsWith("terminalCommand")) {
		if (s.includes("success")) return hex(p.success);
		if (s.includes("error")) return hex(p.error);
		if (s.includes("foreground") || s.includes("cursor")) return hex(p.accent);
		if (s.includes("border") || s.includes("guide")) return hex(p.border);
		return hex(p.sunken);
	}
	if (id.startsWith("minimap") || id.startsWith("editorMinimap") || id.startsWith("minimapGutter") || id.startsWith("minimapSlider")) {
		if (s.includes("error") || s.includes("deleted")) return hex(p.error);
		if (s.includes("warning") || s.includes("modified")) return hex(p.warning);
		if (s.includes("info") || s.includes("added") || s.includes("inserted")) return s.includes("added") || s.includes("inserted") ? hex(p.success) : hex(p.info);
		if (s.includes("find") || s.includes("chat")) return hex(p.find);
		if (s.includes("selection") || s.includes("occurrence")) return hex(p.selection);
		if (s.includes("slider")) return a(p.fg, s.includes("active") ? .35 : s.includes("hover") ? .24 : .14);
		if (s.includes("opacity") || s.includes("foregroundopacity")) return "#00000099";
		return hex(p.bg);
	}
	if (id.startsWith("editorOverviewRuler") || id.startsWith("editorGutter")) {
		if (tone !== "neutral") return hex(toneInk);
		if (s.includes("added")) return hex(p.success);
		if (s.includes("modified")) return hex(p.warning);
		if (s.includes("deleted")) return hex(p.error);
		if (s.includes("bracket") || s.includes("find") || s.includes("selection") || s.includes("word") || s.includes("range")) return hex(p.accent);
		if (s.includes("comment") || s.includes("folding") || s.includes("glyph") || s.includes("itemglyph")) return hex(p.muted);
		if (s.includes("foreground")) return hex(p.muted);
		if (s.includes("border")) return hex(p.border);
		if (s.includes("background") && id.startsWith("editorGutter.background")) return hex(p.bg);
		if (s.includes("background")) return a(p.fg, .08, p.bg);
		return hex(p.bg);
	}
	if (id.startsWith("editorLineNumber")) {
		if (s.includes("active")) return hex(p.fg);
		if (s.includes("dimmed")) return hex(p.faint);
		return hex(p.muted);
	}
	if (id.startsWith("editorCursor") || id.startsWith("editorMultiCursor")) return s.includes("background") ? a(p.accent, .2, p.bg) : hex(s.includes("secondary") ? p.accent2 : p.accent);
	if (id.startsWith("editorWhitespace") || id.startsWith("editorRuler") || id === "editorUnicodeHighlight.border") return hex(p.faint);
	if (id.startsWith("editor.") || id.startsWith("searchEditor") || id.startsWith("search.") || id.startsWith("editorLink") || id.startsWith("editorUnnecessary") || id.startsWith("editorComments") || id.startsWith("peekView") || id.startsWith("editorWidget") || id.startsWith("editorSuggest") || id.startsWith("editorHover") || id.startsWith("editorMarker") || id.startsWith("editorGhost") || id.startsWith("editorLightBulb") || id.startsWith("editorInlay") || id.startsWith("editorSticky") || id.startsWith("inlineEdit")) {
		if (id === "editor.background" || id === "editorGhostText.background") return id.endsWith("background") && id.startsWith("editorGhost") ? "#00000000" : hex(p.bg);
		if (id === "editor.foreground") return hex(p.fg);
		if (id === "editor.selectionForeground") return hex(p.fg);
		if (s.includes("unnecessary") && s.includes("opacity")) return "#000000c0";
		if (s.includes("foldbackground")) return a(p.accent, .12);
		if (s.includes("foldplaceholder")) return hex(p.muted);
		if (s.includes("inlay") || s.includes("ghost")) return s.includes("background") ? a(p.fg, .08, p.bg) : hex(p.muted);
		if (s.includes("lightbulb")) return s.includes("auto") ? hex(p.muted) : hex(p.warning);
		if (s.includes("sticky")) return s.includes("border") || s.includes("shadow") ? s.includes("shadow") ? a(BLACK, .25) : hex(p.border) : hex(p.bg);
		if (tone !== "neutral" && !s.includes("original")) return s.includes("background") ? a(toneInk, .18) : s.includes("border") ? hex(toneInk) : hex(toneInk);
		if (s.includes("findmatch") && !s.includes("highlight")) return s.includes("border") ? hex(p.accent2) : s.includes("foreground") ? hex(p.onAccent2) : hex(p.find);
		if (s.includes("find") || s.includes("filtermatch")) return s.includes("border") ? a(p.accent2, .7) : s.includes("foreground") ? hex(p.fg) : hex(p.findSoft);
		if (s.includes("selectionhighlight") || s.includes("wordhighlight") || s.includes("symbolhighlight") || s.includes("rangehighlight") || s.includes("hoverhighlight") || s.includes("linked")) return s.includes("border") ? a(p.accent, .45) : a(p.accent, s.includes("strong") ? .28 : .16);
		if (s.includes("selection")) return s.includes("foreground") ? hex(p.fg) : s.includes("inactive") ? a(p.accent, .16) : hex(p.selection);
		if (s.includes("linehighlight")) return s.includes("border") ? "#00000000" : a(p.fg, p.dark ? .05 : .045, p.bg);
		if (s.includes("placeholder") || s.includes("resultsinfo")) return hex(p.muted);
		if (s.includes("link")) return hex(p.accent);
		if (s.includes("bracketmatch")) return s.includes("border") ? hex(p.accent) : a(p.accent, .2);
		if (s.includes("widget") || s.includes("suggest") || s.includes("hoverwidget") || s.includes("peek") || s.includes("marker")) {
			if (s.includes("highlight")) return hex(p.accent);
			if (s.includes("foreground")) return s.includes("highlight") || s.includes("selected") || s.includes("focus") ? hex(p.onAccent) : hex(p.fg);
			if (s.includes("border")) return s.includes("focus") || s.includes("peek") ? hex(p.accent) : hex(p.border);
			if (s.includes("selected") || s.includes("focusbackground")) return hex(p.accent);
			if (s.includes("header") || s.includes("title")) return s.includes("background") ? hex(p.accent) : hex(p.onAccent);
			return hex(p.widget);
		}
		if (s.includes("original")) return s.includes("border") ? hex(p.border) : a(p.fg, .06, p.bg);
		if (s.includes("foreground")) return hex(p.fg);
		if (s.includes("border")) return hex(p.border);
		return hex(p.bg);
	}
	if (id.startsWith("diffEditor") || id.startsWith("merge") || id.startsWith("mergeEditor") || id.startsWith("inlineChat")) {
		if (s.includes("removed") || s.includes("deleted") || s.includes("unhandled") && s.includes("conflict")) return s.includes("border") || s.includes("foreground") || s.includes("ruler") ? hex(p.error) : a(p.error, .22);
		if (s.includes("inserted") || s.includes("added") || s.includes("handled")) return s.includes("border") || s.includes("foreground") || s.includes("ruler") ? hex(p.success) : a(p.success, .2);
		if (s.includes("diagonal") || s.includes("border") || s.includes("separator")) return hex(p.border);
		if (s.includes("unchanged")) return s.includes("foreground") ? hex(p.muted) : hex(p.sunken);
		if (s.includes("shadow")) return a(BLACK, .3);
		return a(p.warning, .16);
	}
	if (id.startsWith("testing.")) {
		if (s.includes("passed") || s.includes("covered") && !s.includes("uncovered")) return s.includes("gutter") || s.includes("background") ? a(p.success, .25) : hex(p.success);
		if (s.includes("failed") || s.includes("errored") || s.includes("uncovered")) return s.includes("background") || s.includes("gutter") ? a(p.error, .22) : hex(p.error);
		if (s.includes("queued") || s.includes("message")) return hex(p.warning);
		if (s.includes("skipped") || s.includes("unset") || s.includes("retired")) return hex(p.muted);
		if (s.includes("run")) return hex(p.success);
		if (s.includes("border") || s.includes("peek")) return hex(p.accent);
		if (s.includes("badge")) return s.includes("foreground") ? hex(p.onAccent) : hex(p.accent);
		return hex(p.fg);
	}
	if (id.startsWith("debug") || id.startsWith("debugConsole") || id.startsWith("debugToken") || id.startsWith("debugView")) {
		if (s.includes("error") || s.includes("exception") || s.includes("breakpoint") && !s.includes("disabled")) return hex(p.error);
		if (s.includes("warning") || s.includes("valuechanged")) return hex(p.warning);
		if (s.includes("info") || s.includes("start")) return hex(p.info);
		if (s.includes("disabled")) return hex(p.muted);
		if (s.includes("foreground") && !s.includes("background")) return hex(p.fg);
		if (s.includes("border")) return hex(p.accent);
		return hex(p.widget);
	}
	if (id.startsWith("notification") || id.startsWith("notifications")) {
		if (tone !== "neutral") return s.includes("background") ? a(toneInk, .16, p.widget) : hex(toneInk);
		if (s.includes("foreground") || s.includes("link")) return s.includes("link") ? hex(p.accent) : hex(p.fg);
		if (s.includes("border")) return hex(p.border);
		return hex(p.widget);
	}
	if (id.startsWith("breadcrumb")) {
		if (s.includes("focus") || s.includes("active") && s.includes("foreground")) return hex(p.fg);
		if (s.includes("foreground")) return hex(p.muted);
		if (s.includes("background")) return s.includes("focus") || s.includes("picker") ? hex(p.widget) : hex(p.bg);
		return hex(p.accent);
	}
	if (id.startsWith("scrollbar") || id.startsWith("editorOverviewRuler") || s.includes("scrollbarslider")) {
		if (s.includes("shadow")) return a(BLACK, .25);
		const alpha = s.includes("active") ? .45 : s.includes("hover") ? .32 : .2;
		return a(p.fg, alpha);
	}
	if (id.startsWith("progressBar")) return hex(p.accent);
	if (id.startsWith("pickerGroup") || id.startsWith("quickInput")) {
		if (s.includes("foreground")) return s.includes("focus") ? hex(p.onAccent) : hex(p.fg);
		if (s.includes("border")) return hex(p.border);
		if (s.includes("focus") || s.includes("selected")) return hex(p.accent);
		return hex(p.widget);
	}
	if (id.startsWith("keybinding") || id.startsWith("keyboard")) {
		if (s.includes("foreground")) return hex(p.fg);
		if (s.includes("border") || s.includes("bottom")) return hex(p.border);
		return hex(p.raised);
	}
	if (id.startsWith("welcome") || id.startsWith("walkThrough") || id.startsWith("settings") || id.startsWith("notebook") || id.startsWith("chat") || id.startsWith("inlineChat") || id.startsWith("agent") || id.startsWith("agents") || id.startsWith("interactive")) {
		if (tone !== "neutral") return s.includes("background") ? a(toneInk, .18) : hex(toneInk);
		if (s.includes("slash") || s.includes("badge") || s.includes("requestborder") || s.includes("activecode")) return s.includes("foreground") ? hex(p.onAccent) : hex(p.accent);
		if (s.includes("foreground")) return s.includes("inactive") ? hex(p.inactiveFg) : hex(p.fg);
		if (s.includes("border") || s.includes("sash")) return hex(p.border);
		if (s.includes("hover")) return hex(p.hover);
		if (s.includes("editor") && s.includes("background")) return hex(p.bg);
		return hex(p.sunken);
	}
	if (id.startsWith("extension") || id.startsWith("ports") || id.startsWith("comments") || id.startsWith("issues") || id.startsWith("scm") || id.startsWith("gitlens")) {
		if (tone !== "neutral") return hex(toneInk);
		if (s.includes("button") || s.includes("prominent")) return s.includes("foreground") ? hex(p.onAccent) : hex(p.accent);
		if (s.includes("foreground") || s.includes("icon")) return s.includes("star") || s.includes("verified") || s.includes("prerelease") ? hex(p.accent) : hex(p.fg);
		if (s.includes("border")) return hex(p.border);
		if (s.includes("hover")) return hex(p.hover);
		return hex(p.sunken);
	}
	if (id.startsWith("markdownAlert") || id.startsWith("problems") || id.startsWith("notificationsError") || id.startsWith("notificationsWarning") || id.startsWith("notificationsInfo")) {
		if (s.includes("warning") || s.includes("caution")) return hex(p.warning);
		if (s.includes("error") || s.includes("caution")) return s.includes("caution") ? hex(p.error) : hex(p.error);
		if (s.includes("note") || s.includes("tip") || s.includes("info") || s.includes("important")) return hex(p.info);
		return hex(p.fg);
	}
	if (id.startsWith("gauge")) {
		if (s.includes("error")) return s.includes("foreground") ? hex(onColor(p.error)) : hex(p.error);
		if (s.includes("warning")) return s.includes("foreground") ? hex(onColor(p.warning)) : hex(p.warning);
		if (s.includes("foreground")) return hex(p.onAccent);
		if (s.includes("border")) return hex(p.border);
		return hex(p.accent);
	}
	if (id.startsWith("toolbar") || id.startsWith("actionBar") || id.startsWith("editorActionList") || id.startsWith("simpleFind")) {
		if (s.includes("foreground")) return s.includes("focus") ? hex(p.onAccent) : hex(p.fg);
		if (s.includes("border") || s.includes("outline")) return hex(p.border);
		if (s.includes("focus") || s.includes("toggled") || s.includes("active")) return s.includes("background") ? hex(p.accent) : hex(p.fg);
		if (s.includes("hover") || s.includes("background")) return s.includes("background") ? hex(p.hover) : hex(p.fg);
		return hex(p.hover);
	}
	if (id.startsWith("surface.") || id.startsWith("modern") || id.startsWith("modernUI") || id === "editor.border" || id.startsWith("modernPanel") || id.startsWith("modernSash")) {
		if (s.includes("foreground") || s.includes("grip")) return s.includes("grip") ? hex(p.muted) : hex(p.fg);
		if (s.includes("border")) return hex(p.border);
		if (s.includes("hover") || s.includes("active") && s.includes("background") && s.includes("item")) return hex(p.overlay);
		if (s.includes("shell") || s.includes("inactive")) return hex(s.includes("inactive") ? mix(p.shell, BLACK, .12) : p.shell);
		return hex(p.widget);
	}
	if (id.startsWith("window.")) return hex(p.border);
	if (id.startsWith("profile") || id.startsWith("profiles")) return s.includes("foreground") ? hex(p.fg) : hex(p.sunken);
	if (id.startsWith("snippet")) return s.includes("border") ? hex(p.accent) : a(p.accent, s.includes("final") ? .18 : .28);
	if (id.startsWith("peekView")) {
		if (s.includes("foreground")) return hex(p.onAccent);
		if (s.includes("border")) return hex(p.accent);
		return hex(p.accent);
	}
	if (tone !== "neutral") {
		if (s.includes("background") || s.includes("highlight") || s.includes("fill")) return a(toneInk, .2);
		return hex(toneInk);
	}
	if (/border|stroke|separator|outline/.test(s)) return s.includes("focus") || s.includes("active") ? hex(p.accent) : hex(p.border);
	if (/foreground|icon/.test(s)) {
		if (s.includes("inactive") || s.includes("disabled") || s.includes("dimmed") || s.includes("unfocused")) return hex(p.inactiveFg);
		return hex(p.fg);
	}
	if (/background|highlight/.test(s)) {
		if (s.includes("hover")) return hex(p.hover);
		if (s.includes("active") || s.includes("focus") || s.includes("selected")) return hex(p.accent);
		if (s.includes("editor")) return hex(p.bg);
		if (s.includes("input") || s.includes("widget") || s.includes("dropdown")) return hex(p.widget);
		return hex(p.sunken);
	}
	return hex(p.fg);
}
function paintKateEditor(p) {
	const out = {};
	const map = {
		BackgroundColor: p.bg,
		TextSelection: flatten(p.selection, p.bg),
		CurrentLine: flatten(withAlpha(p.fg, p.dark ? .06 : .05), p.bg),
		SearchHighlight: flatten(p.find, p.bg),
		ReplaceHighlight: flatten(withAlpha(p.warning, .45), p.bg),
		BracketMatching: flatten(withAlpha(p.accent, .28), p.bg),
		TabMarker: p.faint,
		SpellChecking: p.error,
		IndentationLine: p.border,
		IconBorder: p.sunken,
		CodeFolding: mix(p.accent, p.bg, .45),
		LineNumbers: p.muted,
		CurrentLineNumber: p.fg,
		WordWrapMarker: p.faint,
		ModifiedLines: p.warning,
		SavedLines: p.success,
		Separator: p.border,
		MarkBookmark: p.accent,
		MarkBreakpointActive: p.error,
		MarkBreakpointReached: p.warning,
		MarkBreakpointDisabled: p.muted,
		MarkExecution: p.success,
		MarkWarning: p.warning,
		MarkError: p.error,
		TemplateBackground: p.raised,
		TemplatePlaceholder: mix(p.success, p.bg, .55),
		TemplateFocusedPlaceholder: mix(p.accent, p.bg, .45),
		TemplateReadOnlyPlaceholder: mix(p.error, p.bg, .62)
	};
	for (const color of KATE_EDITOR_COLORS) out[color.id] = hex(map[color.id] ?? p.fg);
	return out;
}
function kateStyleForRole(name, p) {
	const role = KATE_STYLES.find((item) => item[0] === name)?.[2] ?? "text";
	const flags = {};
	if (name === "Keyword" || name === "ControlFlow" || name === "Constant" || name === "Alert") flags.bold = true;
	if (name === "Comment" || name === "Documentation") flags.italic = true;
	if (name === "Error") flags.underline = true;
	if (name === "RegionMarker") flags.background = hex(mix(p.accent, p.bg, .72));
	if (name === "Alert") flags.background = hex(mix(p.error, p.bg, .72));
	return {
		role,
		flags
	};
}
function mergeStyle(base, over) {
	if (!over) return base;
	return {
		color: over.color ?? base.color,
		bold: over.bold ?? base.bold,
		italic: over.italic ?? base.italic,
		underline: over.underline ?? base.underline,
		strike: over.strike ?? base.strike,
		background: over.background !== void 0 ? over.background : base.background
	};
}
function selectedInk(color, selection, fg) {
	const ink = mustHex(color);
	const sel = mustHex(selection);
	if (contrast({
		...ink,
		a: 1
	}, sel) >= 3) return toHex({
		...ink,
		a: 1
	});
	const base = mustHex(fg);
	if (contrast(base, sel) >= 3) return toHex(base);
	return toHex(onColor(sel));
}
function buildTheme(state) {
	const palette = makePalette(state.appearance, state.bg, state.fg, state.accent, state.accent2, state.roles);
	const colors = {};
	const colorPinned = {};
	for (const color of VSCODE_COLORS) {
		const pinned = state.colorOverrides[color.id] !== void 0;
		colorPinned[color.id] = pinned;
		colors[color.id] = pinned ? state.colorOverrides[color.id] : paintColor(color.id, palette);
	}
	const tokens = TEXTMATE.map((rule) => {
		const roleStyle = state.roles[rule.role];
		const base = mergeStyle(roleStyle, rule.flags);
		const over = state.tokenOverrides[rule.id];
		return {
			id: rule.id,
			name: rule.name,
			scopes: rule.scopes,
			role: rule.role,
			style: mergeStyle(base, over),
			pinned: over !== void 0 && Object.keys(over).length > 0,
			source: rule
		};
	});
	const semantic = SEMANTIC.map((rule) => {
		const base = mergeStyle(state.roles[rule.role], rule.flags);
		const over = state.semanticOverrides[rule.id];
		return {
			rule,
			style: mergeStyle(base, over),
			pinned: over !== void 0 && Object.keys(over).length > 0
		};
	});
	const derivedKate = paintKateEditor(palette);
	const kateColors = {};
	const kateColorPinned = {};
	for (const color of KATE_EDITOR_COLORS) {
		const pinned = state.kateColorOverrides[color.id] !== void 0;
		kateColorPinned[color.id] = pinned;
		kateColors[color.id] = pinned ? state.kateColorOverrides[color.id] : derivedKate[color.id];
	}
	const selection = kateColors.TextSelection ?? "#333333";
	return {
		palette,
		colors,
		colorPinned,
		tokens,
		semantic,
		kateStyles: KATE_STYLES.map(([name, desc]) => {
			const mapped = kateStyleForRole(name, palette);
			const base = mergeStyle(state.roles[mapped.role], mapped.flags);
			const over = state.kateStyleOverrides[name];
			const style = mergeStyle(base, over);
			return {
				name,
				desc,
				style,
				selected: selectedInk(style.color, selection, state.fg),
				pinned: over !== void 0 && Object.keys(over).length > 0
			};
		}),
		kateColors,
		kateColorPinned
	};
}
function exportedWorkbench(theme, appearance, overrides) {
	const hc = isHc(appearance);
	const out = {};
	for (const [id, value] of Object.entries(theme.colors)) {
		if (OMIT_UNLESS_PINNED.has(id) && overrides[id] === void 0 && !hc) continue;
		out[id] = value;
	}
	return out;
}
function tokenSettings(style) {
	const fontStyle = fontStyleOf(style);
	return {
		foreground: style.color,
		...fontStyle ? { fontStyle } : {},
		...style.background ? { background: style.background } : {}
	};
}
function preset(id, name, blurb, appearance, bg, fg, accent, accent2, roles) {
	return {
		id,
		name,
		blurb,
		appearance,
		bg,
		fg,
		accent,
		accent2,
		roles
	};
}
var PRESETS = [
	preset("harbor", "Harbor", "Slate water, brass fittings", "dark", "#1b2428", "#d7e2e4", "#e0a15a", "#7ec8c3", {
		text: "#d7e2e4",
		comment: "#7d8b90",
		doc: "#93aaa4",
		keyword: "#e0a15a",
		control: "#f0b56a",
		operator: "#c5d4d6",
		string: "#e7c07b",
		verbatim: "#f0d7a8",
		char: "#e7c07b",
		escape: "#f3ddb0",
		regexp: "#e08b7a",
		number: "#d7a0d4",
		constant: "#7ec8c3",
		function: "#8ec8f0",
		method: "#b5daf6",
		type: "#8fd0b4",
		namespace: "#a3c48e",
		variable: "#d7e2e4",
		parameter: "#c5d5ea",
		property: "#c9ddd8",
		tag: "#e0a15a",
		attribute: "#8ec8f0",
		punctuation: "#8ea0a4",
		preprocessor: "#8fd0b4",
		import: "#e0a15a",
		annotation: "#d7a0d4",
		label: "#f0b56a",
		invalid: "#ff8d7a",
		warning: "#f0b56a",
		info: "#8ec8f0",
		inserted: "#8fd0b4",
		deleted: "#ff8d7a",
		changed: "#8ec8f0",
		heading: "#e0a15a",
		emphasis: "#d7a0d4"
	}),
	preset("daybook", "Daybook", "Warm paper, teal ink", "light", "#f4efe6", "#2c2824", "#0e6e6a", "#a14b22", {
		text: "#2c2824",
		comment: "#8a7568",
		doc: "#6d5e52",
		keyword: "#0e6e6a",
		control: "#0a5c6e",
		operator: "#5c534c",
		string: "#a14b22",
		verbatim: "#8a3e28",
		char: "#a14b22",
		escape: "#b86a12",
		regexp: "#a33b4a",
		number: "#6d4b98",
		constant: "#0e6e6a",
		function: "#1d4e89",
		method: "#245a96",
		type: "#2a6b45",
		namespace: "#3d6b32",
		variable: "#2c2824",
		parameter: "#3d5270",
		property: "#3e534c",
		tag: "#0e6e6a",
		attribute: "#1d4e89",
		punctuation: "#8a7b70",
		preprocessor: "#2a6b45",
		import: "#0e6e6a",
		annotation: "#6d4b98",
		label: "#a14b22",
		invalid: "#b4232c",
		warning: "#8a5a00",
		info: "#1d4e89",
		inserted: "#1d6b3a",
		deleted: "#b4232c",
		changed: "#1d4e89",
		heading: "#0e6e6a",
		emphasis: "#6d4b98"
	}),
	preset("signal", "Signal", "Night instrument, chartreuse", "dark", "#121410", "#e8e6d6", "#d6f25c", "#ffb086", {
		text: "#e8e6d6",
		comment: "#7d846f",
		doc: "#a3aa90",
		keyword: "#d6f25c",
		control: "#e4f58a",
		operator: "#c9cbb8",
		string: "#ffb086",
		verbatim: "#ffc7a8",
		char: "#ffb086",
		escape: "#ffe0a8",
		regexp: "#ff8f8a",
		number: "#8fd0ff",
		constant: "#7ddeb4",
		function: "#f4f0a4",
		method: "#fff4c2",
		type: "#7ddeb4",
		namespace: "#b7d98a",
		variable: "#e8e6d6",
		parameter: "#d5d2ea",
		property: "#d7e2c8",
		tag: "#d6f25c",
		attribute: "#8fd0ff",
		punctuation: "#8b907c",
		preprocessor: "#7ddeb4",
		import: "#d6f25c",
		annotation: "#ffb086",
		label: "#e4f58a",
		invalid: "#ff7d78",
		warning: "#ffc45a",
		info: "#8fd0ff",
		inserted: "#7ddeb4",
		deleted: "#ff7d78",
		changed: "#8fd0ff",
		heading: "#d6f25c",
		emphasis: "#ffb086"
	}),
	preset("nightpress", "Nightpress", "Ink black, newsprint red", "dark", "#161417", "#f0e9df", "#ff5d3a", "#f0c27a", {
		text: "#f0e9df",
		comment: "#8d847c",
		doc: "#b3a59a",
		keyword: "#ff5d3a",
		control: "#ff7a5c",
		operator: "#d9cfc4",
		string: "#f0c27a",
		verbatim: "#f6d7a4",
		char: "#f0c27a",
		escape: "#ffe1a8",
		regexp: "#ff8f7a",
		number: "#c6e29a",
		constant: "#9ec1ff",
		function: "#9ec1ff",
		method: "#c2d6ff",
		type: "#e7a0c4",
		namespace: "#d7b48a",
		variable: "#f0e9df",
		parameter: "#e7c8d4",
		property: "#e6d3c4",
		tag: "#ff5d3a",
		attribute: "#9ec1ff",
		punctuation: "#9a9088",
		preprocessor: "#e7a0c4",
		import: "#ff5d3a",
		annotation: "#e7a0c4",
		label: "#f0c27a",
		invalid: "#ff6b6b",
		warning: "#f0c27a",
		info: "#9ec1ff",
		inserted: "#c6e29a",
		deleted: "#ff6b6b",
		changed: "#9ec1ff",
		heading: "#ff5d3a",
		emphasis: "#e7a0c4"
	}),
	preset("quartz", "Quartz", "Cool daylight, cobalt", "light", "#f4f6f8", "#1c2430", "#2457d6", "#a14b28", {
		text: "#1c2430",
		comment: "#6d7785",
		doc: "#4e5968",
		keyword: "#2457d6",
		control: "#1d4cb8",
		operator: "#3d4754",
		string: "#a14b28",
		verbatim: "#8a3f24",
		char: "#a14b28",
		escape: "#a16216",
		regexp: "#b4234a",
		number: "#6a3f98",
		constant: "#0f6e62",
		function: "#1d4cb8",
		method: "#2a5f86",
		type: "#0f6e62",
		namespace: "#3d6b32",
		variable: "#1c2430",
		parameter: "#3a4d68",
		property: "#2c4a44",
		tag: "#2457d6",
		attribute: "#1d4cb8",
		punctuation: "#7a8492",
		preprocessor: "#0f6e62",
		import: "#2457d6",
		annotation: "#6a3f98",
		label: "#a14b28",
		invalid: "#c4232b",
		warning: "#8a5a00",
		info: "#2457d6",
		inserted: "#157a45",
		deleted: "#c4232b",
		changed: "#2457d6",
		heading: "#2457d6",
		emphasis: "#6a3f98"
	}),
	preset("kelp", "Kelp", "Sea glass on black water", "dark", "#101816", "#dce8e2", "#3dbe9a", "#e2b15a", {
		text: "#dce8e2",
		comment: "#7d8f88",
		doc: "#9aafa6",
		keyword: "#3dbe9a",
		control: "#6ed4b4",
		operator: "#c5d4cc",
		string: "#e2b15a",
		verbatim: "#f0cb8a",
		char: "#e2b15a",
		escape: "#f3d7a0",
		regexp: "#e08a78",
		number: "#d7a4cf",
		constant: "#8fd0e0",
		function: "#9ad7c4",
		method: "#c6efe2",
		type: "#8fd0e0",
		namespace: "#b7d48a",
		variable: "#dce8e2",
		parameter: "#c9ddd4",
		property: "#d5e4c8",
		tag: "#3dbe9a",
		attribute: "#8fd0e0",
		punctuation: "#88a099",
		preprocessor: "#8fd0e0",
		import: "#3dbe9a",
		annotation: "#d7a4cf",
		label: "#e2b15a",
		invalid: "#ff8d82",
		warning: "#e2b15a",
		info: "#8fd0e0",
		inserted: "#3dbe9a",
		deleted: "#ff8d82",
		changed: "#8fd0e0",
		heading: "#3dbe9a",
		emphasis: "#d7a4cf"
	})
];
function rolesFromColors(colors) {
	const out = {};
	for (const id of ROLE_IDS) out[id] = styleFrom(id, colors[id]);
	return out;
}
function shufflePalette(appearance) {
	const dark = isDark(appearance);
	const hue = Math.random() * 360;
	const bg = toHex(hsl((hue + 210) % 360, dark ? 14 : 18, dark ? 9 + Math.random() * 5 : 95));
	const bgC = mustHex(bg);
	const fg = toHex(ensureContrast(hsl((hue + 200) % 360, 12, dark ? 90 : 16), bgC, 7));
	const accent = toHex(ensureContrast(hsl(hue, 70, dark ? 66 : 36), bgC, 3));
	const accent2 = toHex(ensureContrast(hsl((hue + 42) % 360, 64, dark ? 68 : 40), bgC, 3));
	const ink = (h, s, ld, ll, min = 4.5) => toHex(ensureContrast(hsl((hue + h) % 360, s, dark ? ld : ll), bgC, min));
	return {
		bg,
		fg,
		accent,
		accent2,
		roles: {
			text: fg,
			comment: ink(200, 10, 52, 42, 3.4),
			doc: ink(190, 14, 64, 36, 4),
			keyword: accent,
			control: ink(18, 72, 68, 38),
			operator: ink(200, 8, 78, 32, 4.5),
			string: accent2,
			verbatim: ink(42, 58, 74, 36),
			char: accent2,
			escape: ink(48, 70, 76, 38),
			regexp: ink(8, 68, 68, 40),
			number: ink(300, 42, 72, 40),
			constant: ink(170, 46, 62, 32),
			function: ink(205, 62, 70, 38),
			method: ink(205, 48, 78, 34),
			type: ink(155, 42, 62, 32),
			namespace: ink(120, 36, 64, 32),
			variable: fg,
			parameter: ink(230, 28, 76, 34),
			property: ink(140, 22, 76, 32),
			tag: accent,
			attribute: ink(205, 55, 70, 38),
			punctuation: ink(200, 8, 58, 46, 3.2),
			preprocessor: ink(155, 40, 62, 32),
			import: accent,
			annotation: ink(300, 40, 72, 40),
			label: ink(28, 70, 66, 38),
			invalid: ink(4, 78, 68, 42),
			warning: ink(38, 80, 64, 36),
			info: ink(205, 60, 68, 40),
			inserted: ink(150, 48, 60, 32),
			deleted: ink(4, 74, 68, 42),
			changed: ink(210, 55, 68, 40),
			heading: accent,
			emphasis: ink(320, 36, 72, 40)
		}
	};
}
function flipHex(input) {
	const c = mustHex(input);
	const { h, s, l } = rgbToHsl(c);
	return toHex(hsl(h, s * 100, (1 - l) * 100, c.a));
}
function uiTheme(appearance) {
	if (appearance === "light") return "vs";
	if (appearance === "hc") return "hc-black";
	if (appearance === "hcLight") return "hc-light";
	return "vs-dark";
}
function themeType(appearance) {
	return appearance;
}
function semanticValue(ruleStyleOnly, style) {
	const font = {};
	if (style.bold) font.bold = true;
	if (style.italic) font.italic = true;
	if (style.underline) font.underline = true;
	if (style.strike) font.strikethrough = true;
	if (ruleStyleOnly) return Object.keys(font).length ? font : { bold: false };
	return {
		foreground: style.color,
		...font
	};
}
function vscodeThemeJson(state, theme) {
	const colors = exportedWorkbench(theme, state.appearance, state.colorOverrides);
	const tokenColors = [...theme.tokens.map((token) => ({
		name: token.name,
		scope: token.scopes.length === 1 ? token.scopes[0] : token.scopes,
		settings: tokenSettings(token.style)
	})), ...state.extraTextmate.map((rule) => ({
		name: rule.name,
		scope: rule.scopes.length === 1 ? rule.scopes[0] : rule.scopes,
		settings: {
			...rule.foreground ? { foreground: rule.foreground } : {},
			...rule.background ? { background: rule.background } : {},
			...rule.fontStyle ? { fontStyle: rule.fontStyle } : {}
		}
	}))];
	const semanticTokenColors = {};
	for (const item of theme.semantic) semanticTokenColors[item.rule.id] = semanticValue(item.rule.styleOnly, item.style);
	return JSON.stringify({
		$schema: "vscode://schemas/color-theme",
		name: state.name,
		type: themeType(state.appearance),
		semanticHighlighting: true,
		colors,
		tokenColors,
		semanticTokenColors
	}, null, 2);
}
function vscodePackageJson(state) {
	const slug = slugify(state.name);
	return JSON.stringify({
		name: `scopewright-${slug}`,
		displayName: state.name,
		description: `${state.name} color theme, generated by Scopewright`,
		version: "1.0.0",
		publisher: "local",
		engines: { vscode: "^1.96.0" },
		categories: ["Themes"],
		contributes: { themes: [{
			label: state.name,
			uiTheme: uiTheme(state.appearance),
			path: `./themes/${slug}-color-theme.json`
		}] }
	}, null, 2);
}
function vscodeSettingsJson(state, theme) {
	const semanticTokenColors = {};
	for (const item of theme.semantic) semanticTokenColors[item.rule.id] = semanticValue(item.rule.styleOnly, item.style);
	return JSON.stringify({
		"workbench.colorCustomizations": exportedWorkbench(theme, state.appearance, state.colorOverrides),
		"editor.tokenColorCustomizations": {
			comments: state.roles.comment.color,
			strings: state.roles.string.color,
			keywords: state.roles.keyword.color,
			numbers: state.roles.number.color,
			types: state.roles.type.color,
			functions: state.roles.function.color,
			variables: state.roles.variable.color,
			textMateRules: theme.tokens.map((token) => ({
				name: token.name,
				scope: token.scopes,
				settings: tokenSettings(token.style)
			}))
		},
		"editor.semanticTokenColorCustomizations": {
			enabled: true,
			rules: semanticTokenColors
		}
	}, null, 2);
}
function kateThemeJson(state, theme) {
	const textStyles = {};
	for (const style of theme.kateStyles) {
		const entry = {
			"text-color": toHex({
				...mustOpaque(style.style.color),
				a: 1
			}),
			"selected-text-color": style.selected,
			bold: style.style.bold,
			italic: style.style.italic,
			underline: style.style.underline,
			"strike-through": style.style.strike
		};
		if (style.style.background) entry["background-color"] = toHex({
			...mustOpaque(style.style.background),
			a: 1
		});
		textStyles[style.name] = entry;
	}
	const editorColors = {};
	for (const [id, value] of Object.entries(theme.kateColors)) editorColors[id] = toHex({
		...mustOpaque(value),
		a: 1
	});
	return JSON.stringify({
		metadata: {
			name: state.name,
			revision: 1,
			license: "SPDX-License-Identifier: MIT",
			copyright: ["SPDX-FileCopyrightText: generated by Scopewright"]
		},
		"text-styles": textStyles,
		"editor-colors": editorColors
	}, null, 2);
}
function mustOpaque(input) {
	return parseHex(input) ?? parseHex("#888888");
}
function downloadText(filename, contents, mime = "application/json") {
	const blob = new Blob([contents], { type: mime });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	link.click();
	URL.revokeObjectURL(url);
}
function stripJsonc(source) {
	return source.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|\s)\/\/.*$/gm, "$1");
}
function asRecord(value) {
	return value && typeof value === "object" && !Array.isArray(value) ? value : null;
}
function fontFrom(value) {
	const style = {};
	if (!value || typeof value !== "object") return style;
	const rec = value;
	const font = typeof rec.fontStyle === "string" ? rec.fontStyle : "";
	if ("bold" in rec || font.includes("bold")) style.bold = Boolean(rec.bold) || font.includes("bold");
	if ("italic" in rec || font.includes("italic")) style.italic = Boolean(rec.italic) || font.includes("italic");
	if ("underline" in rec || font.includes("underline")) style.underline = Boolean(rec.underline) || font.includes("underline");
	if ("strikethrough" in rec || font.includes("strikethrough")) style.strike = Boolean(rec.strikethrough) || font.includes("strikethrough");
	if (typeof rec.foreground === "string" && parseHex(rec.foreground)) style.color = rec.foreground;
	if (typeof rec.background === "string" && parseHex(rec.background)) style.background = rec.background;
	return style;
}
function parseThemeImport(raw) {
	let data;
	try {
		data = JSON.parse(raw);
	} catch {
		try {
			data = JSON.parse(stripJsonc(raw));
		} catch {
			return {
				ok: false,
				error: "That file is not JSON, or the JSON is damaged."
			};
		}
	}
	const root = asRecord(data);
	if (!root) return {
		ok: false,
		error: "The file needs a JSON object at the top."
	};
	if (root["text-styles"] && root["editor-colors"]) return importKate(root);
	if (root["workbench.colorCustomizations"] || root["editor.tokenColorCustomizations"]) return importSettings(root);
	if (root.colors || root.tokenColors || root.semanticTokenColors) return importVscode(root);
	return {
		ok: false,
		error: "Not a VS Code color theme, settings snippet, or Kate .theme file."
	};
}
function importVscode(root) {
	const colors = asRecord(root.colors) ?? {};
	const colorOverrides = {};
	for (const [id, value] of Object.entries(colors)) if (typeof value === "string" && parseHex(value)) colorOverrides[id] = value;
	const name = typeof root.name === "string" ? root.name : "Imported theme";
	const appearance = appearanceFrom(root.type, colorOverrides["editor.background"]);
	const tokenOverrides = {};
	const extraTextmate = [];
	const rules = Array.isArray(root.tokenColors) ? root.tokenColors : [];
	for (const rule of rules) {
		const rec = asRecord(rule);
		if (!rec) continue;
		const scopes = normalizeScopes(rec.scope);
		const settings = fontFrom(rec.settings);
		const known = TEXTMATE.find((item) => item.scopes.some((scope) => scopes.includes(scope)));
		if (known) tokenOverrides[known.id] = {
			...tokenOverrides[known.id],
			...settings
		};
		else if (scopes.length) extraTextmate.push({
			name: typeof rec.name === "string" ? rec.name : scopes[0],
			scopes,
			foreground: settings.color,
			background: settings.background,
			fontStyle: fontStyleOf({
				bold: !!settings.bold,
				italic: !!settings.italic,
				underline: !!settings.underline,
				strike: !!settings.strike
			}) || void 0
		});
	}
	const semanticOverrides = {};
	const semantic = asRecord(root.semanticTokenColors) ?? {};
	for (const item of SEMANTIC) {
		const value = semantic[item.id];
		if (typeof value === "string" && parseHex(value)) semanticOverrides[item.id] = { color: value };
		else if (value && typeof value === "object") semanticOverrides[item.id] = fontFrom(value);
	}
	return {
		ok: true,
		note: `Pinned ${Object.keys(colorOverrides).length} VS Code colors from “${name}”.`,
		patch: {
			name,
			appearance,
			...seedsFrom(colorOverrides, tokenOverrides),
			colorOverrides,
			tokenOverrides,
			semanticOverrides,
			extraTextmate
		}
	};
}
function importSettings(root) {
	const result = importVscode({
		name: "Settings import",
		colors: asRecord(root["workbench.colorCustomizations"]) ?? {},
		tokenColors: asRecord(root["editor.tokenColorCustomizations"])?.textMateRules,
		semanticTokenColors: asRecord(root["editor.semanticTokenColorCustomizations"])?.rules
	});
	if (result.ok) result.patch.name = "Settings import";
	return result;
}
function importKate(root) {
	const meta = asRecord(root.metadata);
	const name = meta && typeof meta.name === "string" ? meta.name : "Imported Kate theme";
	const styles = asRecord(root["text-styles"]) ?? {};
	const editors = asRecord(root["editor-colors"]) ?? {};
	const kateStyleOverrides = {};
	const roleColors = {};
	for (const [styleName, , role] of KATE_STYLES) {
		const rec = asRecord(styles[styleName]);
		if (!rec) continue;
		const partial = {};
		if (typeof rec["text-color"] === "string" && parseHex(rec["text-color"])) {
			partial.color = rec["text-color"];
			roleColors[role] = rec["text-color"];
		}
		if (typeof rec["background-color"] === "string") partial.background = rec["background-color"];
		if (typeof rec.bold === "boolean") partial.bold = rec.bold;
		if (typeof rec.italic === "boolean") partial.italic = rec.italic;
		if (typeof rec.underline === "boolean") partial.underline = rec.underline;
		if (typeof rec["strike-through"] === "boolean") partial.strike = rec["strike-through"];
		kateStyleOverrides[styleName] = partial;
	}
	const kateColorOverrides = {};
	for (const color of KATE_EDITOR_COLORS) {
		const value = editors[color.id];
		if (typeof value === "string" && parseHex(value)) kateColorOverrides[color.id] = value;
	}
	const bg = kateColorOverrides.BackgroundColor ?? "#1e1e1e";
	const fg = roleColors.text ?? "#d4d4d4";
	const accent = kateColorOverrides.TextSelection ?? roleColors.keyword ?? "#569cd6";
	const accent2 = roleColors.string ?? "#ce9178";
	const roles = rolesFromColors({
		...fallbackRoles(fg),
		...stripUndef(roleColors)
	});
	for (const id of ROLE_IDS) {
		const over = Object.entries(kateStyleOverrides).find(([styleName]) => KATE_STYLES.find((row) => row[0] === styleName)?.[2] === id);
		if (!over) continue;
		const partial = over[1];
		roles[id] = {
			...roles[id],
			...partial.color ? { color: partial.color } : {},
			...partial.bold !== void 0 ? { bold: partial.bold } : {},
			...partial.italic !== void 0 ? { italic: partial.italic } : {},
			...partial.underline !== void 0 ? { underline: partial.underline } : {},
			...partial.strike !== void 0 ? { strike: partial.strike } : {}
		};
	}
	return {
		ok: true,
		note: `Loaded Kate theme “${name}” — ${KATE_STYLES.length} text styles and ${Object.keys(kateColorOverrides).length} editor colors.`,
		patch: {
			name,
			appearance: appearanceFrom(void 0, bg),
			bg,
			fg,
			accent: parseHex(accent) ? toHex({
				...mustOpaque(accent),
				a: 1
			}) : accent,
			accent2,
			roles,
			kateStyleOverrides,
			kateColorOverrides,
			colorOverrides: {},
			tokenOverrides: {},
			semanticOverrides: {},
			extraTextmate: []
		}
	};
}
function stripUndef(colors) {
	const out = {};
	for (const id of ROLE_IDS) if (colors[id]) out[id] = colors[id];
	return out;
}
function fallbackRoles(fg) {
	const colors = {};
	for (const id of ROLE_IDS) colors[id] = fg;
	return colors;
}
function seedsFrom(colors, tokenOverrides) {
	const bg = colors["editor.background"] ?? "#1e1e1e";
	const fg = colors["editor.foreground"] ?? "#d4d4d4";
	const accent = colors["activityBarBadge.background"] ?? colors["button.background"] ?? colors["focusBorder"] ?? "#007acc";
	const accent2 = tokenOverrides.string?.color ?? tokenOverrides["string-quoted"]?.color ?? colors["editor.findMatchBackground"] ?? "#ce9178";
	return {
		bg,
		fg,
		accent: opaque(accent),
		accent2: opaque(accent2)
	};
}
function opaque(input) {
	const parsed = parseHex(input);
	return parsed ? toHex({
		...parsed,
		a: 1
	}) : input;
}
function appearanceFrom(type, bg) {
	if (type === "light" || type === "hc" || type === "hcLight" || type === "dark") return type;
	if (!bg || !parseHex(bg)) return "dark";
	const { r, g, b } = parseHex(bg);
	return (.2126 * r + .7152 * g + .0722 * b) / 255 > .55 ? "light" : "dark";
}
function normalizeScopes(scope) {
	if (typeof scope === "string") return [scope];
	if (Array.isArray(scope)) return scope.filter((item) => typeof item === "string");
	return [];
}
function emptyOverrides() {
	return {
		colorOverrides: {},
		tokenOverrides: {},
		semanticOverrides: {},
		kateStyleOverrides: {},
		kateColorOverrides: {},
		extraTextmate: []
	};
}
function themeFileSlug(name) {
	return slugify(name);
}
var harbor = PRESETS[0];
function baseFromPreset(preset = harbor) {
	return {
		name: preset.name,
		appearance: preset.appearance,
		presetId: preset.id,
		bg: preset.bg,
		fg: preset.fg,
		accent: preset.accent,
		accent2: preset.accent2,
		roles: rolesFromColors(preset.roles),
		...emptyOverrides()
	};
}
var useStudio = create()(persist((set, get) => ({
	...baseFromPreset(),
	setName: (name) => set({ name }),
	setAppearance: (appearance) => {
		const current = get();
		if (current.appearance === appearance) return;
		if (!(isDark(current.appearance) !== isDark(appearance))) {
			set({
				appearance,
				presetId: null
			});
			return;
		}
		const roles = { ...current.roles };
		for (const id of ROLE_IDS) roles[id] = {
			...roles[id],
			color: flipHex(roles[id].color)
		};
		const flipMap = (record) => {
			const next = {};
			for (const [key, value] of Object.entries(record)) next[key] = flipHex(value);
			return next;
		};
		set({
			appearance,
			presetId: null,
			bg: flipHex(current.bg),
			fg: flipHex(current.fg),
			accent: flipHex(current.accent),
			accent2: flipHex(current.accent2),
			roles,
			colorOverrides: flipMap(current.colorOverrides),
			kateColorOverrides: flipMap(current.kateColorOverrides)
		});
	},
	setSurface: (key, value) => set({
		[key]: value,
		presetId: null
	}),
	setRole: (id, patch) => set({
		presetId: null,
		roles: {
			...get().roles,
			[id]: {
				...get().roles[id],
				...patch
			}
		}
	}),
	pinColor: (id, value) => set({ colorOverrides: {
		...get().colorOverrides,
		[id]: value
	} }),
	unpinColor: (id) => {
		const next = { ...get().colorOverrides };
		delete next[id];
		set({ colorOverrides: next });
	},
	pinToken: (id, patch) => set({ tokenOverrides: {
		...get().tokenOverrides,
		[id]: {
			...get().tokenOverrides[id],
			...patch
		}
	} }),
	unpinToken: (id) => {
		const next = { ...get().tokenOverrides };
		delete next[id];
		set({ tokenOverrides: next });
	},
	pinSemantic: (id, patch) => set({ semanticOverrides: {
		...get().semanticOverrides,
		[id]: {
			...get().semanticOverrides[id],
			...patch
		}
	} }),
	unpinSemantic: (id) => {
		const next = { ...get().semanticOverrides };
		delete next[id];
		set({ semanticOverrides: next });
	},
	pinKateStyle: (name, patch) => set({ kateStyleOverrides: {
		...get().kateStyleOverrides,
		[name]: {
			...get().kateStyleOverrides[name],
			...patch
		}
	} }),
	unpinKateStyle: (name) => {
		const next = { ...get().kateStyleOverrides };
		delete next[name];
		set({ kateStyleOverrides: next });
	},
	pinKateColor: (id, value) => set({ kateColorOverrides: {
		...get().kateColorOverrides,
		[id]: value
	} }),
	unpinKateColor: (id) => {
		const next = { ...get().kateColorOverrides };
		delete next[id];
		set({ kateColorOverrides: next });
	},
	applyPreset: (id) => {
		const preset = PRESETS.find((item) => item.id === id);
		if (!preset) return;
		set(baseFromPreset(preset));
	},
	shuffle: () => {
		const rolled = shufflePalette(get().appearance);
		set({
			presetId: null,
			name: get().name === harbor.name ? "Draft" : get().name,
			bg: rolled.bg,
			fg: rolled.fg,
			accent: rolled.accent,
			accent2: rolled.accent2,
			roles: rolesFromColors(rolled.roles),
			...emptyOverrides()
		});
	},
	clearPins: () => set(emptyOverrides()),
	liftWeak: () => {
		const state = get();
		const bg = mustHex(state.bg);
		const roles = { ...state.roles };
		for (const id of ROLE_IDS) {
			const min = id === "comment" || id === "punctuation" ? 3.4 : 4.5;
			roles[id] = {
				...roles[id],
				color: toHex(ensureContrast(mustHex(roles[id].color), bg, min))
			};
		}
		set({
			roles,
			fg: toHex(ensureContrast(mustHex(state.fg), bg, 7))
		});
	},
	applyImport: (patch) => set({
		...patch,
		presetId: null
	})
}), {
	name: "scopewright.v1",
	skipHydration: true,
	partialize: (state) => ({
		name: state.name,
		appearance: state.appearance,
		presetId: state.presetId,
		bg: state.bg,
		fg: state.fg,
		accent: state.accent,
		accent2: state.accent2,
		roles: state.roles,
		colorOverrides: state.colorOverrides,
		tokenOverrides: state.tokenOverrides,
		semanticOverrides: state.semanticOverrides,
		kateStyleOverrides: state.kateStyleOverrides,
		kateColorOverrides: state.kateColorOverrides,
		extraTextmate: state.extraTextmate
	})
}));
function ratioLabel(fg, bg) {
	const a = parseHex(fg);
	const b = parseHex(bg);
	if (!a || !b) return {
		text: "—",
		tone: "fail"
	};
	const value = contrast(a, b);
	const text = value.toFixed(1);
	if (value < 3) return {
		text,
		tone: "fail"
	};
	if (value < 4.5) return {
		text,
		tone: "thin"
	};
	return {
		text,
		tone: "ok"
	};
}
function HexField({ label, value, onChange }) {
	const [draft, setDraft] = (0, import_react.useState)(value);
	(0, import_react.useEffect)(() => setDraft(value), [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "relative size-11 shrink-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "checker absolute inset-0 rounded-md" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute inset-0 rounded-md border border-line",
					style: { background: value }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					"aria-label": label,
					type: "color",
					value: opaque$1(value),
					className: "absolute inset-0 cursor-pointer opacity-0",
					onChange: (event) => onChange(keepAlpha(event.target.value, value))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			"aria-label": `${label} hex`,
			spellCheck: false,
			value: draft,
			onChange: (event) => {
				const next = event.target.value;
				setDraft(next);
				if (parseHex(next)) onChange(normalize(next, value));
			},
			className: "h-11 w-full rounded-md border border-line bg-bg-sunken px-2 font-mono text-xs text-fg"
		})]
	});
}
function keepAlpha(nextOpaque, previous) {
	return setAlpha(nextOpaque, alphaOf(previous));
}
function normalize(input, previous) {
	if (!parseHex(input)) return previous;
	if (input.trim().length <= 5) return setAlpha(input, alphaOf(previous));
	return input.startsWith("#") ? input : `#${input}`;
}
function AlphaSlider({ value, onChange }) {
	const alpha = Math.round(alphaOf(value) * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center gap-3 text-xs text-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-10",
				children: "Alpha"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: 0,
				max: 100,
				value: alpha,
				"aria-label": "Alpha",
				onChange: (event) => onChange(setAlpha(value, Number(event.target.value) / 100)),
				className: "h-2 flex-1 accent-accent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-8 font-mono text-fg",
				children: alpha
			})
		]
	});
}
var FLAGS = [
	["bold", "B"],
	["italic", "I"],
	["underline", "U"],
	["strike", "S"]
];
function FlagToggles({ style, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-1",
		children: FLAGS.map(([flag, label]) => {
			const on = style[flag];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": on,
				"aria-label": flag,
				onClick: () => onChange(flag, !on),
				className: "size-8 rounded-md border text-xs " + (on ? "border-accent bg-accent text-accent-ink" : "border-line bg-bg-sunken text-muted") + (flag === "italic" ? " italic" : "") + (flag === "underline" ? " underline" : "") + (flag === "strike" ? " line-through" : ""),
				children: label
			}, flag);
		})
	});
}
function PalettePanel({ theme }) {
	const state = useStudio();
	const bg = state.bg;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "Theme name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: state.name,
					onChange: (event) => state.setName(event.target.value),
					className: "h-11 rounded-md border border-line bg-bg-sunken px-3 text-sm"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs tracking-wide text-muted uppercase",
				children: "Starting point"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: PRESETS.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => state.applyPreset(preset.id),
					className: "rounded-md border p-2 text-left " + (state.presetId === preset.id ? "border-accent" : "border-line bg-bg-sunken"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex gap-1",
							children: [
								preset.bg,
								preset.fg,
								preset.accent,
								preset.accent2
							].map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: "size-3 rounded-full",
								style: { background: color }
							}, color))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm",
							children: preset.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-muted",
							children: preset.blurb
						})
					]
				}, preset.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => state.shuffle(),
					className: "inline-flex h-11 items-center gap-2 rounded-md border border-line px-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { size: 16 }), " Shuffle"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => state.liftWeak(),
					className: "inline-flex h-11 items-center gap-2 rounded-md border border-line px-3 text-sm",
					children: "Lift weak contrast"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppearanceControl, {
				value: state.appearance,
				onChange: state.setAppearance
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Editor background",
						value: state.bg,
						onChange: (value) => state.setSurface("bg", value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Editor foreground",
						value: state.fg,
						onChange: (value) => state.setSurface("fg", value),
						ratio: ratioLabel(state.fg, bg)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Accent",
						value: state.accent,
						onChange: (value) => state.setSurface("accent", value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Second accent",
						value: state.accent2,
						onChange: (value) => state.setSurface("accent2", value)
					})
				]
			}),
			ROLE_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs tracking-wide text-muted uppercase",
				children: group.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2",
				children: group.roles.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleRow, {
					id,
					bg,
					style: state.roles[id],
					onChange: (patch) => state.setRole(id, patch)
				}, id))
			})] }, group.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-faint",
				children: [
					theme.tokens.length,
					" TextMate rules, ",
					theme.semantic.length,
					" semantic rules, and ",
					theme.kateStyles.length,
					" Kate text styles follow these pigments unless you pin them."
				]
			})
		]
	});
}
function AppearanceControl({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-2 text-xs tracking-wide text-muted uppercase",
		children: "Appearance"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
		children: [
			["dark", "Dark"],
			["light", "Light"],
			["hc", "HC dark"],
			["hcLight", "HC light"]
		].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-pressed": value === id,
			onClick: () => onChange(id),
			className: "h-11 rounded-md border text-sm " + (value === id ? "border-accent bg-accent text-accent-ink" : "border-line bg-bg-sunken text-fg"),
			children: label
		}, id))
	})] });
}
function Field({ label, value, onChange, ratio }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-1 flex items-baseline justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm",
			children: label
		}), ratio ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contrast, {
			text: ratio.text,
			tone: ratio.tone
		}) : null]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexField, {
		label,
		value,
		onChange
	})] });
}
function Contrast({ text, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `font-mono text-xs ${tone === "fail" ? "text-danger" : tone === "thin" ? "text-warn" : "text-muted"}`,
		children: [text, ":1"]
	});
}
function RoleRow({ id, bg, style, onChange }) {
	const ratio = ratioLabel(style.color, bg);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-line bg-bg-sunken p-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm",
				children: ROLE_LABEL[id]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contrast, {
				text: ratio.text,
				tone: ratio.tone
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-40 flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexField, {
					label: ROLE_LABEL[id],
					value: style.color,
					onChange: (color) => onChange({ color })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlagToggles, {
				style,
				onChange: (flag, next) => onChange({ [flag]: next })
			})]
		})]
	});
}
function TokenPanel({ theme }) {
	const [tab, setTab] = (0, import_react.useState)("textmate");
	const [query, setQuery] = (0, import_react.useState)("");
	const [pinnedOnly, setPinnedOnly] = (0, import_react.useState)(false);
	const q = query.trim().toLowerCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 border-b border-line p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-1 sm:grid-cols-4",
				children: [
					["textmate", `TextMate ${theme.tokens.length}`],
					["semantic", `Semantic ${theme.semantic.length}`],
					["kate", `Kate text ${theme.kateStyles.length}`],
					["kate-ui", `Kate UI ${KATE_EDITOR_COLORS.length}`]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": tab === id,
					onClick: () => setTab(id),
					className: "h-10 rounded-md px-2 text-xs " + (tab === id ? "bg-accent text-accent-ink" : "bg-bg-sunken text-muted"),
					children: label
				}, id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex h-11 flex-1 items-center gap-2 rounded-md border border-line bg-bg-sunken px-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						size: 16,
						className: "text-faint"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Filter tokens",
						className: "h-full w-full bg-transparent text-sm outline-none"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": pinnedOnly,
					onClick: () => setPinnedOnly((value) => !value),
					className: "h-11 rounded-md border px-3 text-sm " + (pinnedOnly ? "border-accent text-accent" : "border-line text-muted"),
					children: "Pins"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-auto",
			children: [
				tab === "textmate" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextmateList, {
					theme,
					query: q,
					pinnedOnly
				}) : null,
				tab === "semantic" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SemanticList, {
					theme,
					query: q,
					pinnedOnly
				}) : null,
				tab === "kate" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KateStyleList, {
					theme,
					query: q,
					pinnedOnly
				}) : null,
				tab === "kate-ui" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KateColorList, {
					theme,
					query: q,
					pinnedOnly
				}) : null
			]
		})]
	});
}
function TextmateList({ theme, query, pinnedOnly }) {
	const pin = useStudio((s) => s.pinToken);
	const unpin = useStudio((s) => s.unpinToken);
	const rows = theme.tokens.filter((token) => {
		if (pinnedOnly && !token.pinned) return false;
		if (!query) return true;
		return token.name.toLowerCase().includes(query) || token.id.includes(query) || token.scopes.some((scope) => scope.toLowerCase().includes(query));
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [rows.map((token) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyleRow, {
		title: token.name,
		meta: token.scopes.slice(0, 2).join(", "),
		style: token.style,
		pinned: token.pinned,
		onColor: (color) => pin(token.id, { color }),
		onFlag: (flag, next) => pin(token.id, { [flag]: next }),
		onReset: () => unpin(token.id)
	}, token.id)), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {}) : null] });
}
function SemanticList({ theme, query, pinnedOnly }) {
	const pin = useStudio((s) => s.pinSemantic);
	const unpin = useStudio((s) => s.unpinSemantic);
	const rows = theme.semantic.filter((item) => {
		if (pinnedOnly && !item.pinned) return false;
		if (!query) return true;
		return item.rule.id.toLowerCase().includes(query) || item.rule.detail.toLowerCase().includes(query);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyleRow, {
		title: item.rule.id,
		meta: item.rule.detail,
		style: item.style,
		pinned: item.pinned,
		hideColor: item.rule.styleOnly,
		onColor: (color) => pin(item.rule.id, { color }),
		onFlag: (flag, next) => pin(item.rule.id, { [flag]: next }),
		onReset: () => unpin(item.rule.id)
	}, item.rule.id)), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {}) : null] });
}
function KateStyleList({ theme, query, pinnedOnly }) {
	const pin = useStudio((s) => s.pinKateStyle);
	const unpin = useStudio((s) => s.unpinKateStyle);
	const rows = theme.kateStyles.filter((style) => {
		if (pinnedOnly && !style.pinned) return false;
		if (!query) return true;
		return style.name.toLowerCase().includes(query) || style.desc.toLowerCase().includes(query);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [rows.map((style) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyleRow, {
		title: style.name,
		meta: style.desc,
		style: style.style,
		pinned: style.pinned,
		onColor: (color) => pin(style.name, { color }),
		onFlag: (flag, next) => pin(style.name, { [flag]: next }),
		onReset: () => unpin(style.name)
	}, style.name)), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {}) : null] });
}
function KateColorList({ theme, query, pinnedOnly }) {
	const pin = useStudio((s) => s.pinKateColor);
	const unpin = useStudio((s) => s.unpinKateColor);
	const rows = KATE_EDITOR_COLORS.filter((color) => {
		const pinned = theme.kateColorPinned[color.id];
		if (pinnedOnly && !pinned) return false;
		if (!query) return true;
		return color.id.toLowerCase().includes(query) || color.desc.toLowerCase().includes(query);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [rows.map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorRow, {
		id: color.id,
		desc: color.desc,
		value: theme.kateColors[color.id] ?? "#000",
		pinned: !!theme.kateColorPinned[color.id],
		onChange: (value) => pin(color.id, value),
		onReset: () => unpin(color.id)
	}, color.id)), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {}) : null] });
}
function StyleRow({ title, meta, style, pinned, hideColor, onColor, onFlag, onReset }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "border-b border-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((value) => !value),
			className: "flex w-full items-center gap-3 px-3 py-2 text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "checker relative size-6 shrink-0 rounded-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute inset-0 rounded-sm",
						style: {
							background: hideColor ? "transparent" : style.color,
							boxShadow: hideColor ? "inset 0 0 0 1px var(--color-line)" : void 0
						}
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate text-sm",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate font-mono text-xs text-faint",
						children: meta
					})]
				}),
				pinned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-2 rounded-full bg-accent" }) : null
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 px-3 pb-3",
			children: [
				hideColor ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexField, {
					label: title,
					value: style.color,
					onChange: onColor
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlagToggles, {
					style,
					onChange: onFlag
				}),
				pinned ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onReset,
					className: "inline-flex h-10 items-center gap-2 self-start text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 14 }), " Follow palette"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-faint",
					children: "Follows the palette until you change it."
				})
			]
		}) : null]
	});
}
function WorkbenchPanel({ theme }) {
	const sections = (0, import_react.useMemo)(() => [...new Set(VSCODE_COLORS.map((color) => color.section))], []);
	const [section, setSection] = (0, import_react.useState)("Editor colors");
	const [query, setQuery] = (0, import_react.useState)("");
	const [pinnedOnly, setPinnedOnly] = (0, import_react.useState)(false);
	const pin = useStudio((s) => s.pinColor);
	const unpin = useStudio((s) => s.unpinColor);
	const q = query.trim().toLowerCase();
	const rows = VSCODE_COLORS.filter((color) => {
		const pinned = theme.colorPinned[color.id];
		if (pinnedOnly && !pinned) return false;
		if (q) return color.id.toLowerCase().includes(q) || color.desc.toLowerCase().includes(q) || color.section.toLowerCase().includes(q);
		return color.section === section;
	}).slice(0, q ? 120 : 400);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 border-b border-line p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [VSCODE_COLORS.length, " workbench colors from the VS Code theme reference, including modern UI."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex h-11 items-center gap-2 rounded-md border border-line bg-bg-sunken px-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						size: 16,
						className: "text-faint"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Search all colors",
						className: "h-full w-full bg-transparent text-sm outline-none"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						"aria-label": "Color group",
						value: section,
						onChange: (event) => setSection(event.target.value),
						className: "h-11 min-w-0 flex-1 rounded-md border border-line bg-bg-sunken px-2 text-sm",
						children: sections.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": pinnedOnly,
						onClick: () => setPinnedOnly((value) => !value),
						className: "h-11 rounded-md border px-3 text-sm " + (pinnedOnly ? "border-accent text-accent" : "border-line text-muted"),
						children: "Pins"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "min-h-0 flex-1 overflow-auto",
			children: rows.map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorRow, {
				id: color.id,
				desc: color.desc,
				value: theme.colors[color.id] ?? "#000",
				pinned: !!theme.colorPinned[color.id],
				onChange: (value) => pin(color.id, value),
				onReset: () => unpin(color.id)
			}, color.id))
		})]
	});
}
function ColorRow({ id, desc, value, pinned, onChange, onReset }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "border-b border-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((next) => !next),
			className: "flex w-full items-center gap-3 px-3 py-2 text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "checker relative size-6 shrink-0 rounded-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute inset-0 rounded-sm",
						style: { background: value }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-0 flex-1 truncate font-mono text-xs",
					children: id
				}),
				pinned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-2 shrink-0 rounded-full bg-accent" }) : null
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 px-3 pb-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: desc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexField, {
					label: id,
					value,
					onChange
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlphaSlider, {
					value,
					onChange
				}),
				pinned ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onReset,
					className: "inline-flex h-10 items-center gap-2 self-start text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 14 }), " Follow palette"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-faint",
					children: "Derived from the palette. Editing pins it."
				})
			]
		}) : null]
	});
}
function Empty() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "px-3 py-6 text-sm text-muted",
		children: "Nothing matches."
	});
}
function ExportPanel({ state, theme }) {
	const [note, setNote] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(null);
	const slug = themeFileSlug(state.name);
	const weak = (0, import_react.useMemo)(() => {
		const bg = mustHex(state.bg);
		return Object.entries(state.roles).filter(([, style]) => contrast(mustHex(style.color), bg) < 4.5).map(([id, style]) => ({
			id,
			ratio: contrast(mustHex(style.color), bg)
		}));
	}, [state.bg, state.roles]);
	async function copy(label, text) {
		await navigator.clipboard.writeText(text);
		setCopied(label);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "One palette, two editors. VS Code gets every workbench color plus TextMate and semantic tokens. Kate gets every KSyntaxHighlighting text style and editor color."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => downloadText(`${slug}-color-theme.json`, vscodeThemeJson(state, theme)),
						className: "inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-3 text-sm font-medium text-accent-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 16 }), " VS Code theme JSON"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => downloadText("package.json", vscodePackageJson(state)),
						className: "inline-flex h-11 items-center justify-center gap-2 rounded-md border border-line px-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 16 }), " Extension package.json"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => downloadText(`${slug}.theme`, kateThemeJson(state, theme)),
						className: "inline-flex h-11 items-center justify-center gap-2 rounded-md border border-line px-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 16 }), " Kate .theme"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => void copy("settings", vscodeSettingsJson(state, theme)),
					className: "inline-flex h-11 items-center gap-2 rounded-md border border-line px-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 16 }),
						" ",
						copied === "settings" ? "Copied settings" : "Copy settings snippet"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => void copy("vscode", vscodeThemeJson(state, theme)),
					className: "inline-flex h-11 items-center gap-2 rounded-md border border-line px-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 16 }),
						" ",
						copied === "vscode" ? "Copied theme" : "Copy theme JSON"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "inline-flex h-11 cursor-pointer items-center gap-2 self-start rounded-md border border-line px-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 16 }),
					" Import JSON",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "application/json,.json,.theme",
						className: "sr-only",
						onChange: async (event) => {
							const file = event.target.files?.[0];
							event.target.value = "";
							if (!file) return;
							const result = parseThemeImport(await file.text());
							if (!result.ok) {
								setNote(result.error);
								return;
							}
							state.applyImport(result.patch);
							setNote(result.note);
						}
					})
				]
			}),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: note
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-line bg-bg-sunken p-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 font-medium",
					children: "Install in VS Code"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "list-decimal space-y-1 pl-4 text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Put the theme JSON in a folder named themes, next to the package.json." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Copy that folder into your extensions directory and reload VS Code." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Or paste the settings snippet into settings.json for an instant preview without an extension." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-line bg-bg-sunken p-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 font-medium",
					children: "Install in Kate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "Save the .theme file to ~/.local/share/org.kde.syntax-highlighting/themes/ and pick it under Settings, Configure Kate, Fonts & Colors. KWrite and KDevelop read the same file."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-1 text-sm",
					children: "Contrast against the editor background"
				}),
				weak.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Every syntax color clears 4.5:1."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-1",
					children: weak.slice(0, 8).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ROLE_LABEL[item.id] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: item.ratio < 3 ? "text-danger" : "text-warn",
							children: [item.ratio.toFixed(1), ":1"]
						})]
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-faint",
					children: "Selection foreground is left out of the VS Code file unless you pin it or use a high-contrast appearance. Setting it replaces syntax color inside selections."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => state.clearPins(),
				className: "inline-flex h-11 items-center gap-2 self-start text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 14 }), " Clear every pin"]
			})
		]
	});
}
var s = (t, r, extra) => ({
	t,
	r,
	...extra
});
var SAMPLE = [
	{
		n: 1,
		spans: [s("// scopewright · every token the editor will actually paint", "comment")]
	},
	{
		n: 2,
		spans: [
			s("import", "import"),
			s(" { ", "punctuation"),
			s("readTheme", "variable", { sel: true }),
			s(" } ", "punctuation"),
			s("from", "import"),
			s(" ", "text"),
			s("\"@scope/wright\"", "string"),
			s(";", "punctuation")
		]
	},
	{
		n: 3,
		spans: [s("", "text")]
	},
	{
		n: 4,
		bookmark: true,
		spans: [
			s("/** ", "doc"),
			s("@deprecated", "annotation"),
			s(" use ThemeSpec — kept for the old pipeline */", "doc")
		]
	},
	{
		n: 5,
		spans: [
			s("export", "keyword"),
			s(" ", "text"),
			s("type", "keyword"),
			s(" ", "text"),
			s("ThemeSpec", "type"),
			s("<", "punctuation"),
			s("T", "type"),
			s(" ", "text"),
			s("extends", "keyword"),
			s(" ", "text"),
			s("string", "type"),
			s("> = {", "punctuation")
		]
	},
	{
		n: 6,
		spans: [
			s("  ", "text"),
			s("name", "property"),
			s(": ", "punctuation"),
			s("T", "type"),
			s(";", "punctuation")
		]
	},
	{
		n: 7,
		spans: [
			s("  ", "text"),
			s("revision", "property"),
			s(": ", "punctuation"),
			s("12", "number"),
			s(";", "punctuation")
		]
	},
	{
		n: 8,
		spans: [
			s("  ", "text"),
			s("accents", "property"),
			s(": ", "punctuation"),
			s("readonly", "keyword"),
			s(" [", "punctuation"),
			s("0x1B", "number", { k: "BaseN" }),
			s(", ", "punctuation"),
			s("0.86", "number", { k: "Float" }),
			s("];", "punctuation")
		]
	},
	{
		n: 9,
		spans: [s("};", "punctuation")]
	},
	{
		n: 10,
		spans: [s("", "text")]
	},
	{
		n: 11,
		breakpoint: true,
		spans: [
			s("const", "keyword"),
			s(" ", "text"),
			s("HEX", "constant"),
			s(" = ", "operator"),
			s("/^#(?:[0-9a-f]{6}|[0-9a-f]{8})$/i", "regexp"),
			s(";", "punctuation")
		]
	},
	{
		n: 12,
		spans: [s("", "text")]
	},
	{
		n: 13,
		spans: [
			s("export", "keyword"),
			s(" ", "text"),
			s("function", "keyword"),
			s(" ", "text"),
			s("paint", "function"),
			s("(", "punctuation"),
			s("spec", "parameter"),
			s(": ", "punctuation"),
			s("ThemeSpec", "type"),
			s("<", "punctuation"),
			s("\"harbor\"", "string"),
			s(">, ", "punctuation"),
			s("token", "parameter", { find: true }),
			s(": ", "punctuation"),
			s("string", "type"),
			s("): ", "punctuation"),
			s("string", "type"),
			s(" {", "punctuation")
		]
	},
	{
		n: 14,
		current: true,
		modified: true,
		spans: [
			s("  ", "text"),
			s("if", "control"),
			s(" (", "punctuation"),
			s("token", "variable", { find: true }),
			s(" ", "text"),
			s("===", "operator"),
			s(" ", "text"),
			s("\"keyword\"", "string"),
			s(") ", "punctuation"),
			s("return", "control"),
			s(" ", "text"),
			s("spec", "variable"),
			s(".", "punctuation"),
			s("name", "property"),
			s(";", "punctuation")
		]
	},
	{
		n: 15,
		spans: [
			s("  ", "text"),
			s("throw", "control"),
			s(" ", "text"),
			s("new", "keyword"),
			s(" ", "text"),
			s("Error", "type"),
			s("(", "punctuation"),
			s("`unknown ", "string"),
			s("${", "keyword"),
			s("token", "variable", { wave: "error" }),
			s("}`", "keyword"),
			s(");", "punctuation")
		]
	},
	{
		n: 16,
		spans: [s("}", "punctuation")]
	},
	{
		n: 17,
		spans: [s("", "text")]
	},
	{
		n: 18,
		fold: true,
		spans: [s("#region", "label"), s(" marks", "text")]
	},
	{
		n: 19,
		saved: true,
		spans: [
			s("paint", "function"),
			s("(", "punctuation"),
			s("spec", "variable"),
			s(", ", "punctuation"),
			s("r\"verbatim\"", "verbatim"),
			s("); ", "punctuation"),
			s("// ", "comment"),
			s("TODO", "warning", { k: "Alert" }),
			s(": cover alerts", "comment")
		]
	},
	{
		n: 20,
		spans: [s("#endregion", "label")]
	}
];
function kateNameFor(role, explicit) {
	if (explicit) return explicit;
	return KATE_STYLES.find((row) => row[2] === role)?.[0] ?? "Normal";
}
function PreviewStage({ theme, name, editor, view, onEditor, onView }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex h-full min-h-0 flex-col gap-3 p-3 lg:p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-faint uppercase",
				children: "Preview"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-semibold",
				children: name
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
					value: editor,
					onChange: onEditor,
					options: [["vscode", "VS Code"], ["kate", "Kate"]]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
					value: view,
					onChange: onView,
					options: [["snippet", "Snippet"], ["specimen", "All tokens"]]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "stage h-80 overflow-hidden rounded-md border border-line sm:h-96 lg:h-auto lg:min-h-0 lg:flex-1",
			children: editor === "vscode" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VscodeFrame, {
				theme,
				name,
				view
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KateFrame, {
				theme,
				name,
				view
			})
		})]
	});
}
function Segment({ value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex rounded-md border border-line bg-bg-sunken p-1",
		children: options.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-pressed": value === id,
			onClick: () => onChange(id),
			className: "h-9 rounded-sm px-3 text-sm motion " + (value === id ? "bg-accent text-accent-ink" : "text-muted"),
			children: label
		}, id))
	});
}
function ink(style, wave, colors) {
	const deco = [
		style.underline ? "underline" : "",
		style.strike ? "line-through" : "",
		wave ? "underline" : ""
	].filter(Boolean).join(" ");
	return {
		color: style.color,
		background: style.background,
		fontWeight: style.bold ? 650 : 450,
		fontStyle: style.italic ? "italic" : "normal",
		textDecorationLine: deco || void 0,
		textDecorationStyle: wave ? "wavy" : "solid",
		textDecorationColor: wave === "error" ? colors?.["editorError.foreground"] : wave === "warning" ? colors?.["editorWarning.foreground"] : void 0
	};
}
function VscodeFrame({ theme, name, view }) {
	const c = theme.colors;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col",
		style: {
			background: c["modernUI.shellBackground"],
			color: c.foreground
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-1 gap-2 p-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stage-side flex w-12 shrink-0 flex-col items-center gap-3 py-3",
					style: {
						background: c["modernActivityBar.background"],
						borderRight: `1px solid ${c["modernActivityBar.border"]}`
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Files, { size: 18 }),
							active: true,
							color: c["modernActivityBarItem.activeForeground"],
							bg: c["modernActivityBarItem.activeBackground"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 }),
							color: c["activityBar.inactiveForeground"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, { size: 18 }),
							color: c["activityBar.inactiveForeground"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bug, { size: 18 }),
							color: c["activityBar.inactiveForeground"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stage-side flex w-40 shrink-0 flex-col py-2",
					style: {
						background: c["sideBar.background"],
						color: c["sideBar.foreground"]
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 pb-2 text-xs tracking-wide",
						style: { color: c["sideBarTitle.foreground"] },
						children: "SCOPEWRIGHT"
					}), [
						["theme.ts", true],
						["kate.theme", false],
						["package.json", false],
						["README.md", false]
					].map(([file, active]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-1 truncate rounded-sm px-2 py-1 text-xs",
						style: {
							background: active ? c["list.activeSelectionBackground"] : "transparent",
							color: active ? c["list.activeSelectionForeground"] : c["sideBar.foreground"]
						},
						children: file
					}, file))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-1 flex-col overflow-hidden",
					style: {
						background: c["editor.background"],
						border: `1px solid ${c["editor.border"]}`,
						borderRadius: 8
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex",
							style: { background: c["editorGroupHeader.tabsBackground"] },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-3 py-2 text-xs",
								style: {
									background: c["tab.activeBackground"],
									color: c["tab.activeForeground"],
									boxShadow: `inset 0 2px 0 ${c["tab.activeBorderTop"]}`
								},
								children: "theme.ts"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-3 py-2 text-xs",
								style: { color: c["tab.inactiveForeground"] },
								children: "notes.md"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-3 py-1 text-xs",
							style: { color: c["breadcrumb.foreground"] },
							children: ["src ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: c["breadcrumb.focusForeground"] },
								children: "/ theme.ts"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative min-h-0 flex-1 overflow-auto",
							children: [view === "snippet" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VscodeSnippet, { theme }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VscodeSpecimen, { theme }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute top-2 right-3 hidden items-center gap-2 rounded-md px-2 py-1 text-xs sm:flex",
								style: {
									background: c["editorWidget.background"],
									color: c["editorWidget.foreground"],
									border: `1px solid ${c["editorWidget.border"]}`,
									boxShadow: `0 8px 24px ${c["widget.shadow"]}`
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "token" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										background: c["button.background"],
										color: c["button.foreground"]
									},
									className: "rounded-sm px-2 py-0.5",
									children: "1 of 2"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "truncate px-3 py-1 font-mono text-xs",
							style: {
								background: c["terminal.background"],
								color: c["terminal.foreground"]
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { color: c["terminal.ansiGreen"] },
									children: "scopewright"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { color: c["terminal.ansiBrightBlack"] },
									children: " $ "
								}),
								"echo",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: { color: c["terminal.ansiYellow"] },
									children: [
										"\"",
										name,
										"\""
									]
								})
							]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-3 py-1 text-xs",
			style: {
				background: c["statusBar.background"],
				color: c["statusBar.foreground"]
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scopewright" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							background: c["statusBarItem.errorBackground"],
							color: c["statusBarItem.errorForeground"]
						},
						className: "rounded-sm px-1",
						children: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "UTF-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TypeScript" })
				]
			})]
		})]
	});
}
function Activity({ icon, color, bg, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex size-8 items-center justify-center rounded-md",
		style: {
			color,
			background: active ? bg : "transparent"
		},
		children: icon
	});
}
function roleStyle(theme, role) {
	return theme.palette.role[role];
}
function VscodeSnippet({ theme }) {
	const c = theme.colors;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: "m-0 px-2 py-1 font-mono text-sm leading-6",
		style: {
			background: c["editor.background"],
			color: c["editor.foreground"]
		},
		children: SAMPLE.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex",
			style: { background: line.current ? c["editor.lineHighlightBackground"] : "transparent" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-8 shrink-0 text-right select-none",
					style: { color: line.current ? c["editorLineNumber.activeForeground"] : c["editorLineNumber.foreground"] },
					children: line.n
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-2 w-1 shrink-0",
					style: { background: line.modified ? c["editorGutter.modifiedBackground"] : line.saved ? c["editorGutter.addedBackground"] : "transparent" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line.spans.map((span, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						...ink(roleStyle(theme, span.r), span.wave, c),
						background: span.sel ? c["editor.selectionBackground"] : span.find ? c["editor.findMatchBackground"] : roleStyle(theme, span.r).background
					},
					children: span.t || " "
				}, `${line.n}-${index}`)) })
			]
		}, line.n))
	});
}
function VscodeSpecimen({ theme }) {
	const c = theme.colors;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "font-mono text-xs leading-6",
		style: { background: c["editor.background"] },
		children: [
			theme.tokens.map((token) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 px-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-40 shrink-0 truncate",
					style: { color: c["editorLineNumber.foreground"] },
					children: token.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					style: ink(token.style),
					children: ["Aa ", token.scopes[0]]
				})]
			}, token.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 pt-3 pb-1 text-xs",
				style: { color: c["breadcrumb.foreground"] },
				children: "Semantic"
			}),
			theme.semantic.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 px-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-40 shrink-0 truncate",
					style: { color: c["editorLineNumber.foreground"] },
					children: item.rule.id
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: item.rule.styleOnly ? {
						...ink(item.style),
						color: c["editor.foreground"]
					} : ink(item.style),
					children: item.rule.label
				})]
			}, item.rule.id))
		]
	});
}
function KateFrame({ theme, name, view }) {
	const k = theme.kateColors;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col",
		style: {
			background: k.BackgroundColor,
			color: theme.kateStyles[0]?.style.color
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-3 py-2 text-xs",
			style: {
				background: k.IconBorder,
				color: k.LineNumbers
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [name, ".theme"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kate · KSyntaxHighlighting" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 flex-1 overflow-auto",
			children: view === "snippet" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KateSnippet, { theme }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KateSpecimen, { theme })
		})]
	});
}
function kateStyle(theme, name) {
	return theme.kateStyles.find((style) => style.name === name) ?? theme.kateStyles[0];
}
function KateSnippet({ theme }) {
	const k = theme.kateColors;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: "m-0 font-mono text-sm leading-6",
		style: { background: k.BackgroundColor },
		children: SAMPLE.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex",
			style: { background: line.current ? k.CurrentLine : "transparent" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex w-5 shrink-0 justify-center",
					style: { background: k.IconBorder },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
						className: "my-1 w-1.5",
						style: { background: line.bookmark ? k.MarkBookmark : line.breakpoint ? k.MarkBreakpointActive : line.modified ? k.ModifiedLines : line.saved ? k.SavedLines : line.fold ? k.CodeFolding : "transparent" }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-8 shrink-0 pr-2 text-right select-none",
					style: {
						background: k.IconBorder,
						color: line.current ? k.CurrentLineNumber : k.LineNumbers
					},
					children: line.n
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "px-2",
					children: line.spans.map((span, index) => {
						const style = kateStyle(theme, kateNameFor(span.r, span.k));
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								...ink(style.style, span.wave, {
									"editorError.foreground": k.MarkError,
									"editorWarning.foreground": k.MarkWarning
								}),
								background: span.sel ? k.TextSelection : span.find ? k.SearchHighlight : style.style.background,
								color: span.sel ? style.selected : style.style.color
							},
							children: span.t || " "
						}, `${line.n}-${index}`);
					})
				})
			]
		}, line.n))
	});
}
function KateSpecimen({ theme }) {
	const k = theme.kateColors;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-mono text-xs leading-7",
		style: { background: k.BackgroundColor },
		children: theme.kateStyles.map((style) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-3 px-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-36 shrink-0",
				style: { color: k.LineNumbers },
				children: style.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					...ink(style.style),
					background: style.style.background ?? "transparent"
				},
				children: "The quick token"
			})]
		}, style.name))
	});
}
var TABS = [
	{
		id: "palette",
		label: "Palette",
		icon: Palette
	},
	{
		id: "tokens",
		label: "Tokens",
		icon: Braces
	},
	{
		id: "workbench",
		label: "Colors",
		icon: SwatchBook
	},
	{
		id: "export",
		label: "Export",
		icon: Download
	}
];
function Studio() {
	const state = useStudio();
	const [panel, setPanel] = (0, import_react.useState)("palette");
	const [editor, setEditor] = (0, import_react.useState)("vscode");
	const [view, setView] = (0, import_react.useState)("snippet");
	(0, import_react.useEffect)(() => {
		useStudio.persist.rehydrate();
	}, []);
	const theme = (0, import_react.useMemo)(() => buildTheme({
		name: state.name,
		appearance: state.appearance,
		bg: state.bg,
		fg: state.fg,
		accent: state.accent,
		accent2: state.accent2,
		roles: state.roles,
		colorOverrides: state.colorOverrides,
		tokenOverrides: state.tokenOverrides,
		semanticOverrides: state.semanticOverrides,
		kateStyleOverrides: state.kateStyleOverrides,
		kateColorOverrides: state.kateColorOverrides,
		extraTextmate: state.extraTextmate
	}), [
		state.name,
		state.appearance,
		state.bg,
		state.fg,
		state.accent,
		state.accent2,
		state.roles,
		state.colorOverrides,
		state.tokenOverrides,
		state.semanticOverrides,
		state.kateStyleOverrides,
		state.kateColorOverrides,
		state.extraTextmate
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-dvh flex-col bg-bg text-fg lg:h-dvh",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center justify-between gap-3 border-b border-line px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-base font-semibold tracking-tight",
					children: "Scopewright"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "VS Code and Kate, every token and editor color"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "hidden font-mono text-xs text-faint sm:block",
				children: [
					VSCODE_COLORS.length,
					" colors · ",
					KATE_STYLES.length,
					" styles · ",
					KATE_EDITOR_COLORS.length,
					" Kate UI"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-1 flex-col lg:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-1 flex min-h-80 flex-col lg:order-2 lg:min-h-0 lg:flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewStage, {
					theme,
					name: state.name,
					editor,
					view,
					onEditor: setEditor,
					onView: setView
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 flex min-h-0 flex-1 flex-col border-line lg:order-1 lg:h-full lg:w-[26rem] lg:flex-none lg:border-r",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-4 border-b border-line",
					children: TABS.map((tab) => {
						const Icon = tab.icon;
						const on = panel === tab.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => setPanel(tab.id),
							className: "flex h-12 flex-col items-center justify-center gap-0.5 text-xs " + (on ? "text-accent" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 16 }), tab.label]
						}, tab.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-0 flex-1 overflow-auto",
					children: [
						panel === "palette" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PalettePanel, { theme }) : null,
						panel === "tokens" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TokenPanel, { theme }) : null,
						panel === "workbench" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkbenchPanel, { theme }) : null,
						panel === "export" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportPanel, {
							state,
							theme
						}) : null
					]
				})]
			})]
		})]
	});
}
function Mark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "32",
		height: "32",
		viewBox: "0 0 32 32",
		"aria-hidden": "true",
		className: "shrink-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "7",
				className: "fill-bg-sunken"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 9h8M8 16h16M8 23h11",
				stroke: "currentColor",
				className: "text-accent",
				strokeWidth: "2.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "23.5",
				cy: "9",
				r: "2",
				className: "fill-warn"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24.5",
				cy: "23",
				r: "2",
				className: "fill-fg"
			})
		]
	});
}
var SplitComponent = Studio;
//#endregion
export { SplitComponent as component };
