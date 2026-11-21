/* @ds-bundle: {"format":4,"namespace":"SalonAlloushDesignSystem_7d8ad7","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"},{"name":"Toast","sourcePath":"components/surfaces/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/surfaces/Tooltip.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"dbf86a1b9c57","components/core/Button.jsx":"5e09f4c2a053","components/core/Icon.jsx":"2cc9b9549364","components/core/IconButton.jsx":"28a58e0a881f","components/core/Tag.jsx":"1c59a4c78c4c","components/core/Wordmark.jsx":"b2b7085a05b6","components/forms/Checkbox.jsx":"8aadc9ab345b","components/forms/Field.jsx":"00e7e44ca997","components/forms/Input.jsx":"53f60f9525a1","components/forms/Radio.jsx":"93aebc41ff87","components/forms/Select.jsx":"5313917efe08","components/forms/Switch.jsx":"71b27b43bc47","components/surfaces/Card.jsx":"b24ee022bbee","components/surfaces/Dialog.jsx":"e4b14645d07d","components/surfaces/Tabs.jsx":"80e81e9a24e0","components/surfaces/Toast.jsx":"32454b5bfaf3","components/surfaces/Tooltip.jsx":"12d2fd45a28c","site/templates/landing-page/ServiceCarousel.jsx":"51200800f45f","site/templates/landing-page/api.js":"9483ba455f31","site/templates/landing-page/ds-base.js":"0861429c9959","site/ui_kits/shared/salon-data.js":"066546bdecab","social/image-slot.js":"fff26d081c8d","ui_kits/booking-site/Book.jsx":"27abf8891b9b","ui_kits/booking-site/Home.jsx":"5bea17c32179","ui_kits/booking-site/Location.jsx":"c079be82aeff","ui_kits/booking-site/Services.jsx":"f11cdc9b7fd3","ui_kits/booking-site/Shell.jsx":"347c7ab15f4a","ui_kits/booking-site/data.js":"6ee8c91cbd83","ui_kits/employee/screens.jsx":"12556b283226","ui_kits/receptionist/screens.jsx":"05a18d62bbed","ui_kits/shared/ios-frame.jsx":"24642b887be3","ui_kits/shared/salon-data.js":"066546bdecab","ui_kits/shared/staff-ui.jsx":"02604e5c3356"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SalonAlloushDesignSystem_7d8ad7 = window.SalonAlloushDesignSystem_7d8ad7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = {
  neutral: ["var(--surface-sunken)", "var(--text-muted)"],
  success: ["var(--success-100)", "var(--success-600)"],
  warning: ["var(--warning-100)", "var(--warning-600)"],
  danger: ["var(--danger-100)", "var(--danger-600)"],
  info: ["var(--info-100)", "var(--info-600)"],
  accent: ["var(--accent-soft)", "var(--text-accent)"]
};
function Badge({
  tone = "neutral",
  dot,
  children,
  style,
  ...rest
}) {
  const [bg, fg] = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 22,
      padding: "0 8px",
      font: "var(--type-caption)",
      fontWeight: 500,
      color: fg,
      background: bg,
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      ...style
    }
  }), dot && /*#__PURE__*/React.createElement("i", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 99,
      background: fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useState
} = React;
const BASE = "https://unpkg.com/lucide-static@0.460.0/icons/";
const cache = {};
function load(name) {
  if (!cache[name]) cache[name] = fetch(BASE + name + ".svg").then(r => r.ok ? r.text() : "").then(t => t.replace(/<svg[^>]*>/, m => m.replace(/\s(width|height)="[^"]*"/g, "").replace(/<svg/, '<svg width="100%" height="100%"'))).catch(() => "");
  return cache[name];
}
function Icon({
  name,
  size = 20,
  color = "currentColor",
  style,
  ...rest
}) {
  const [svg, setSvg] = useState(null);
  useEffect(() => {
    let on = true;
    load(name).then(t => on && setSvg(t || ""));
    return () => {
      on = false;
    };
  }, [name]);
  const box = {
    display: "inline-flex",
    width: size,
    height: size,
    flex: "none",
    color,
    lineHeight: 0,
    ...style
  };
  if (svg) return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: box,
    dangerouslySetInnerHTML: {
      __html: svg
    }
  }));
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      ...box,
      backgroundColor: svg === "" ? "transparent" : color,
      WebkitMaskImage: `url(${BASE}${name}.svg)`,
      maskImage: `url(${BASE}${name}.svg)`,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center"
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const H = {
  sm: "var(--control-h-sm)",
  md: "var(--control-h-md)",
  lg: "var(--control-h-lg)"
};
const FS = {
  sm: "var(--text-sm)",
  md: "var(--text-sm)",
  lg: "var(--text-md)"
};
const V = {
  primary: {
    bg: "var(--primary)",
    hover: "var(--primary-hover)",
    active: "var(--primary-active)",
    fg: "var(--text-on-inverse)",
    border: "transparent"
  },
  accent: {
    bg: "var(--accent)",
    hover: "var(--accent-hover)",
    active: "var(--grey-700)",
    fg: "var(--text-on-accent)",
    border: "transparent"
  },
  secondary: {
    bg: "transparent",
    hover: "var(--surface-sunken)",
    active: "var(--paper-300)",
    fg: "var(--text-heading)",
    border: "var(--border-strong)"
  },
  ghost: {
    bg: "transparent",
    hover: "var(--surface-sunken)",
    active: "var(--paper-300)",
    fg: "var(--text-heading)",
    border: "transparent"
  },
  inverse: {
    bg: "var(--paper-50)",
    hover: "#fff",
    active: "var(--paper-200)",
    fg: "var(--ink-900)",
    border: "transparent"
  }
};
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconEnd,
  full,
  loading,
  disabled,
  children,
  style,
  ...rest
}) {
  const [h, setH] = useState(false),
    [a, setA] = useState(false);
  const v = V[variant] || V.primary;
  const bg = disabled ? v.bg : a ? v.active : h ? v.hover : v.bg;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled || loading,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false)
  }, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      height: H[size],
      padding: size === "sm" ? "0 var(--space-4)" : "0 var(--control-px)",
      width: full ? "100%" : undefined,
      font: "var(--type-label)",
      fontSize: FS[size],
      fontFamily: "var(--font-body)",
      color: v.fg,
      background: bg,
      border: "1px solid " + v.border,
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .45 : 1,
      transform: a && !disabled ? "translateY(1px)" : "none",
      transition: "background var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out)",
      whiteSpace: "nowrap",
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: loading ? "loader-circle" : icon,
    size: size === "lg" ? 20 : 18,
    style: loading ? {
      animation: "spin 1s linear infinite"
    } : undefined
  }), children, iconEnd && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconEnd,
    size: size === "lg" ? 20 : 18
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function IconButton({
  name,
  label,
  variant = "ghost",
  size = "md",
  disabled,
  style,
  ...rest
}) {
  const [h, setH] = useState(false);
  const d = size === "sm" ? 36 : size === "lg" ? 52 : 44;
  const s = {
    ghost: {
      bg: h ? "var(--surface-sunken)" : "transparent",
      fg: "var(--text-heading)",
      b: "transparent"
    },
    outline: {
      bg: h ? "var(--surface-sunken)" : "transparent",
      fg: "var(--text-heading)",
      b: "var(--border-default)"
    },
    primary: {
      bg: h ? "var(--primary-hover)" : "var(--primary)",
      fg: "var(--text-on-inverse)",
      b: "transparent"
    },
    inverse: {
      bg: h ? "rgba(255,255,255,.14)" : "transparent",
      fg: "var(--text-on-inverse)",
      b: "var(--border-on-dark)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest, {
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: s.bg,
      color: s.fg,
      border: "1px solid " + s.b,
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .45 : 1,
      transition: "background var(--dur-fast) var(--ease-out)",
      padding: 0,
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size === "sm" ? 18 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Tag({
  selected,
  onSelect,
  onRemove,
  icon,
  children,
  style,
  ...rest
}) {
  const [h, setH] = useState(false);
  const inter = !!onSelect;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: inter ? "button" : undefined,
    tabIndex: inter ? 0 : undefined,
    onClick: onSelect,
    onKeyDown: e => {
      if (inter && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        onSelect();
      }
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 32,
      padding: "0 12px",
      font: "var(--type-label)",
      color: selected ? "var(--text-on-inverse)" : "var(--text-heading)",
      background: selected ? "var(--primary)" : h && inter ? "var(--surface-sunken)" : "var(--surface-card)",
      border: "1px solid " + (selected ? "var(--primary)" : "var(--border-default)"),
      borderRadius: "var(--radius-pill)",
      cursor: inter ? "pointer" : "default",
      userSelect: "none",
      transition: "background var(--dur-fast) var(--ease-out)",
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    "aria-label": "\u0625\u0632\u0627\u0644\u0629",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      all: "unset",
      cursor: "pointer",
      display: "inline-flex",
      marginInlineStart: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  size = "md",
  tone = "default",
  style,
  ...rest
}) {
  const big = size === "lg" ? "var(--text-4xl)" : size === "sm" ? "var(--text-xl)" : "var(--text-2xl)";
  const dark = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      lineHeight: 1,
      ...style
    }
  }), size !== "sm" && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-caps)",
      color: dark ? "var(--accent-on-dark)" : "var(--text-accent)"
    }
  }, "\u0635\u0627\u0644\u0648\u0646 \u0627\u0644\u0643\u0648\u0627\u0641\u064A\u0631"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: big,
      lineHeight: 1.15,
      color: dark ? "var(--text-on-inverse)" : "var(--text-heading)"
    }
  }, "\u0639\u0644\u0648\u0634"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  onChange,
  label,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      font: "var(--type-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked ? "var(--primary)" : "var(--surface-card)",
      border: "1px solid " + (checked ? "var(--primary)" : "var(--border-strong)"),
      borderRadius: "var(--radius-sm)",
      color: "#fff",
      transition: "background var(--dur-fast) var(--ease-out)"
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: 6,
      font: "var(--type-label)",
      color: "var(--text-heading)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", null, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)",
      marginInlineStart: 4
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: error ? "var(--danger-600)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const base = (f, e) => ({
  height: "var(--control-h-md)",
  width: "100%",
  boxSizing: "border-box",
  padding: "0 var(--space-4)",
  font: "var(--type-body)",
  fontSize: "var(--text-sm)",
  fontFamily: "var(--font-body)",
  color: "var(--text-body)",
  background: "var(--surface-card)",
  border: "1px solid " + (e ? "var(--danger-600)" : f ? "var(--border-strong)" : "var(--border-default)"),
  borderRadius: "var(--radius-sm)",
  outline: "none",
  transition: "border-color var(--dur-fast) var(--ease-out)"
});
function Input({
  icon,
  error,
  style,
  ...rest
}) {
  const [f, setF] = useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    style: {
      position: "absolute",
      insetInlineStart: 12,
      top: 13,
      color: "var(--text-subtle)"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    onFocus: e => {
      setF(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setF(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...base(f, error),
      paddingInlineStart: icon ? 40 : undefined,
      ...style
    }
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked,
  onChange,
  label,
  name,
  value,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      font: "var(--type-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: 99,
      border: "1px solid " + (checked ? "var(--primary)" : "var(--border-strong)"),
      background: "var(--surface-card)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, checked && /*#__PURE__*/React.createElement("i", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 99,
      background: "var(--primary)"
    }
  })), label);
}
function RadioGroup({
  options = [],
  value,
  onChange,
  name,
  direction = "column",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: direction,
      gap: direction === "row" ? "var(--space-6)" : "var(--space-3)",
      flexWrap: "wrap",
      ...style
    }
  }, options.map(o => {
    const v = typeof o === "string" ? o : o.value,
      l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement(Radio, {
      key: v,
      name: name,
      value: v,
      label: l,
      checked: value === v,
      onChange: onChange
    });
  }));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const base = (f, e) => ({
  height: "var(--control-h-md)",
  width: "100%",
  boxSizing: "border-box",
  padding: "0 var(--space-4)",
  font: "var(--type-body)",
  fontSize: "var(--text-sm)",
  fontFamily: "var(--font-body)",
  color: "var(--text-body)",
  background: "var(--surface-card)",
  border: "1px solid " + (e ? "var(--danger-600)" : f ? "var(--border-strong)" : "var(--border-default)"),
  borderRadius: "var(--radius-sm)",
  outline: "none",
  transition: "border-color var(--dur-fast) var(--ease-out)"
});
function Select({
  options = [],
  placeholder,
  error,
  style,
  value,
  ...rest
}) {
  const [f, setF] = useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    value: value,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...base(f, error),
      appearance: "none",
      paddingInlineEnd: 40,
      color: value === "" || value == null ? "var(--text-subtle)" : "var(--text-body)",
      ...style
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      position: "absolute",
      insetInlineEnd: 12,
      top: 13,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      font: "var(--type-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 22,
      flex: "none",
      borderRadius: 99,
      background: checked ? "var(--primary)" : "var(--paper-300)",
      position: "relative",
      transition: "background var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      position: "absolute",
      top: 3,
      insetInlineStart: checked ? 21 : 3,
      width: 16,
      height: 16,
      borderRadius: 99,
      background: "#fff",
      transition: "inset-inline-start var(--dur-base) var(--ease-out)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Card({
  elevated,
  interactive,
  accentRule,
  pad = true,
  children,
  style,
  ...rest
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderTop: accentRule ? "var(--rule-accent)" : undefined,
      borderRadius: "var(--radius-sm)",
      boxShadow: elevated ? "var(--shadow-md)" : interactive && h ? "var(--shadow-md)" : "none",
      padding: pad ? "var(--card-pad)" : 0,
      transition: "box-shadow var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)",
      transform: interactive && h ? "translateY(-2px)" : "none",
      cursor: interactive ? "pointer" : undefined,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
const {
  useEffect
} = React;
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 440,
  sheet
}) {
  useEffect(() => {
    if (!open) return;
    const k = e => e.key === "Escape" && onClose && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--overlay-scrim)",
      display: "flex",
      alignItems: sheet ? "flex-end" : "center",
      justifyContent: "center",
      padding: sheet ? 0 : "var(--space-6)",
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--surface-card)",
      width: sheet ? "100%" : "100%",
      maxWidth: sheet ? "100%" : width,
      borderRadius: sheet ? "var(--radius-lg) var(--radius-lg) 0 0" : "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      display: "flex",
      flexDirection: "column",
      maxHeight: "90vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-4) var(--space-4) var(--space-4) var(--space-6)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--type-h3)",
      color: "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "\u0625\u063A\u0644\u0627\u0642",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)",
      overflow: "auto",
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "flex-start",
      padding: "var(--space-4) var(--space-6)",
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--surface-raised)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid var(--border-default)",
      ...style
    }
  }, tabs.map(t => {
    const v = typeof t === "string" ? t : t.value,
      l = typeof t === "string" ? t : t.label,
      on = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        all: "unset",
        cursor: "pointer",
        padding: "10px 0 12px",
        marginBottom: -1,
        font: "var(--type-label)",
        fontSize: "var(--text-md)",
        color: on ? "var(--text-heading)" : "var(--text-muted)",
        borderBottom: "2px solid " + (on ? "var(--accent)" : "transparent"),
        transition: "color var(--dur-fast) var(--ease-out)"
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Toast.jsx
try { (() => {
const I = {
  success: "circle-check",
  warning: "triangle-alert",
  danger: "circle-x",
  info: "info"
};
function Toast({
  tone = "info",
  title,
  message,
  onClose,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      width: 360,
      maxWidth: "100%",
      padding: "var(--space-4)",
      background: "var(--surface-inverse)",
      color: "var(--text-on-inverse)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-lg)",
      borderInlineStart: "3px solid var(--" + tone + "-600)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: I[tone] || I.info,
    size: 20,
    style: {
      color: "var(--accent-on-dark)",
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "grid",
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("b", {
    style: {
      font: "var(--type-label)",
      color: "inherit"
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--ink-100)"
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "\u0625\u063A\u0644\u0627\u0642",
    onClick: onClose,
    style: {
      all: "unset",
      cursor: "pointer",
      display: "inline-flex",
      color: "var(--ink-300)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Toast.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  label,
  children,
  side = "top"
}) {
  const [o, setO] = useState(false);
  const pos = side === "bottom" ? {
    top: "calc(100% + 8px)"
  } : {
    bottom: "calc(100% + 8px)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    onFocus: () => setO(true),
    onBlur: () => setO(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      insetInlineStart: "50%",
      transform: "translateX(50%)",
      ...pos,
      padding: "6px 10px",
      font: "var(--type-caption)",
      color: "var(--text-on-inverse)",
      background: "var(--ink-950)",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      opacity: o ? 1 : 0,
      pointerEvents: "none",
      transition: "opacity var(--dur-fast) var(--ease-out)",
      zIndex: 40
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tooltip.jsx", error: String((e && e.message) || e) }); }

// site/templates/landing-page/ServiceCarousel.jsx
try { (() => {
const {
  useState,
  useRef,
  useEffect,
  useCallback
} = React;
const CARDS = [{
  id: "hair",
  title: "الشعر",
  desc: "قص، صبغ، تسريحات وعناية بالشعر.",
  cta: "اكتشفي خدمات الشعر",
  accent: "#C65A32",
  icon: "scissors",
  photo: "شعر",
  img: "../../assets/work/hair-ponytail.jpg",
  bg: "radial-gradient(70% 60% at 70% 30%,rgba(198,90,50,.8),transparent 70%),radial-gradient(60% 60% at 20% 80%,rgba(103,67,56,.85),transparent 70%),#211B1B"
}, {
  id: "nails",
  title: "الأظافر",
  desc: "مانيكير، بديكير وتركيب أظافر.",
  cta: "اكتشفي خدمات الأظافر",
  accent: "#D58B91",
  icon: "hand",
  photo: "أظافر",
  img: "../../assets/work/nails-french.jpg",
  bg: "radial-gradient(70% 60% at 70% 30%,rgba(213,139,145,.8),transparent 70%),radial-gradient(60% 60% at 20% 80%,rgba(132,45,57,.75),transparent 70%),#211B1B"
}, {
  id: "brows",
  title: "الحواجب",
  desc: "ترتيب وتحديد الحواجب.",
  cta: "اكتشفي خدمات الحواجب",
  accent: "#E8C8AD",
  icon: "eye",
  photo: "حواجب",
  img: "../../assets/work/brows-tattoo.jpg",
  bg: "radial-gradient(70% 60% at 70% 30%,rgba(232,200,173,.6),transparent 70%),radial-gradient(60% 60% at 20% 80%,rgba(103,67,56,.85),transparent 70%),#211B1B"
}, {
  id: "bridal",
  title: "العرايس",
  desc: "مكياج وتسريحات ليومج المميز.",
  cta: "اكتشفي خدمات العرايس",
  accent: "#842D39",
  icon: "crown",
  photo: "عروس",
  img: "../../assets/work/bride-tiara.jpg",
  bg: "radial-gradient(70% 60% at 70% 30%,rgba(132,45,57,.85),transparent 70%),radial-gradient(60% 60% at 20% 80%,rgba(245,239,233,.3),transparent 70%),#211B1B"
}];
// Repeat the deck so the ring always has at least 8 slots — keeps 5 cards in view with 4 services.
const REP = Math.max(1, Math.ceil(8 / CARDS.length));
const RING = Array.from({
  length: CARDS.length * REP
}, (_, i) => CARDS[i % CARDS.length]);
const N = RING.length;
const wrap = d => {
  d = (d % N + N) % N;
  return d > N / 2 ? d - N : d;
};
function ServiceCarousel({
  onSelect,
  compact
}) {
  const Icon = (window.SalonAlloushDesignSystem_7d8ad7 || {}).Icon;
  const wrapRef = useRef(null);
  const [w, setW] = useState(1100);
  const [vh, setVh] = useState(typeof window !== "undefined" ? window.innerHeight : 800);
  const [pos, setPos] = useState(0);
  const [hover, setHover] = useState(null);
  const phys = useRef({
    pos: 0,
    v: 0,
    target: 0,
    dragging: false,
    lastX: 0,
    lastT: 0,
    moved: 0,
    raf: 0
  });
  const reduced = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  useEffect(() => {
    const m = () => {
      wrapRef.current && setW(wrapRef.current.clientWidth);
      setVh(window.innerHeight);
    };
    m();
    window.addEventListener("resize", m);
    return () => window.removeEventListener("resize", m);
  }, []);
  const tick = useCallback(() => {
    const p = phys.current;
    let last = performance.now();
    const step = now => {
      const dt = Math.min(.05, (now - last) / 1000);
      last = now;
      if (!p.dragging) {
        if (reduced) {
          p.pos = p.target;
          p.v = 0;
        } else {
          const k = 110,
            c = 2 * Math.sqrt(k) * .95;
          p.v += (p.target - p.pos) * k * dt - p.v * c * dt;
          p.pos += p.v * dt;
        }
      }
      setPos(p.pos);
      if (p.dragging || Math.abs(p.target - p.pos) > .0005 || Math.abs(p.v) > .0005) p.raf = requestAnimationFrame(step);else {
        p.pos = p.target;
        setPos(p.target);
        p.raf = 0;
      }
    };
    if (!p.raf) p.raf = requestAnimationFrame(step);
  }, [reduced]);
  const go = useCallback(t => {
    const p = phys.current;
    p.target = t;
    tick();
  }, [tick]);
  const goTo = i => {
    const p = phys.current;
    go(Math.round(p.pos) + wrap(i - Math.round(p.pos)));
  };
  const mobile = w < 720;
  const ppc = mobile ? w * .62 : Math.min(360, w * .3);
  const onDown = e => {
    const p = phys.current;
    p.dragging = true;
    p.lastX = e.clientX;
    p.lastT = performance.now();
    p.v = 0;
    p.moved = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
    tick();
  };
  const onMove = e => {
    const p = phys.current;
    if (!p.dragging) return;
    const dx = e.clientX - p.lastX,
      now = performance.now(),
      dt = Math.max(1, now - p.lastT) / 1000;
    p.pos -= dx / ppc;
    p.v = -(dx / ppc) / dt;
    p.lastX = e.clientX;
    p.lastT = now;
    p.moved += Math.abs(dx);
  };
  const onUp = () => {
    const p = phys.current;
    if (!p.dragging) return;
    p.dragging = false;
    const proj = p.pos + p.v * .18;
    p.v = Math.max(-6, Math.min(6, p.v));
    go(Math.round(proj));
  };
  const onWheel = e => {
    if (Math.abs(e.deltaX) < 4) return;
    const p = phys.current;
    p.target = Math.round(p.pos + Math.sign(e.deltaX));
    tick();
  };
  useEffect(() => () => cancelAnimationFrame(phys.current.raf), []);

  // Geometry derived from container width so the center card plus two neighbours per side (5) always fit.
  const ratio = compact ? 1.2 : 1.38;
  let cardW = mobile ? Math.min(compact ? 170 : 220, w * .42) : Math.min(compact ? 220 : 280, w * .2);
  if (compact) cardW = Math.min(cardW, vh * .4 / ratio); // fit above the fold on short viewports
  const cardH = cardW * ratio;
  const stepX = (w - cardW) / 4; // horizontal distance between neighbouring slots
  const theta = mobile ? 22 : 16,
    R = stepX / Math.sin(theta * Math.PI / 180),
    lift = mobile ? .55 : .7;
  const active = (Math.round(pos) % N + N) % N % CARDS.length;
  const glass = {
    background: "rgba(33,27,27,.5)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(245,239,233,.16)"
  };
  const navBtn = {
    width: mobile || compact ? 44 : 52,
    height: mobile || compact ? 44 : 52,
    borderRadius: 999,
    ...glass,
    color: "#F5EFE9",
    fontSize: 20,
    cursor: "pointer",
    display: "grid",
    placeItems: "center",
    boxShadow: "0 16px 40px -16px rgba(0,0,0,.8),inset 0 1px 0 rgba(245,239,233,.12)",
    transition: "background .2s,transform .2s"
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    style: {
      position: "relative",
      width: "100%",
      userSelect: "none",
      touchAction: "pan-y"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onPointerDown: onDown,
    onPointerMove: onMove,
    onPointerUp: onUp,
    onPointerCancel: onUp,
    onWheel: onWheel,
    style: {
      position: "relative",
      height: cardH + (mobile ? compact ? 16 : 50 : compact ? 36 : 150),
      perspective: 1400,
      perspectiveOrigin: "50% 30%",
      cursor: phys.current.dragging ? "grabbing" : "grab",
      overflow: "hidden"
    }
  }, !compact && /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 1000 220",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      left: "-6%",
      right: "-6%",
      width: "112%",
      bottom: mobile ? 6 : 14,
      height: mobile ? 90 : 150,
      opacity: .5,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0 Q 500 440 1000 0",
    fill: "none",
    stroke: "url(#alosh-arc)",
    strokeWidth: "1.5",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "alosh-arc",
    x1: "0",
    x2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#E8C8AD",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".5",
    stopColor: "#E8C8AD"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#E8C8AD",
    stopOpacity: "0"
  })))), RING.map((c, i) => {
    const d = wrap(i - pos);
    if (Math.abs(d) > 3.2) return null;
    const a = d * theta * Math.PI / 180;
    const cos = Math.cos(a),
      sin = Math.sin(a);
    const x = R * sin,
      y = -R * (1 - cos) * lift,
      z = -R * (1 - cos) * 1.1;
    const depth = 1 - cos;
    const scale = Math.max(.6, 1 - depth * 2.4);
    const isHover = hover === i,
      center = Math.abs(d) < .5;
    const op = Math.max(0, Math.min(1, 1.15 - Math.abs(d) * .3));
    return /*#__PURE__*/React.createElement("div", {
      key: c.id + "-" + i,
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(null),
      onClick: () => {
        if (phys.current.moved > 6) return;
        center ? onSelect && onSelect(c.id) : goTo(i);
      },
      style: {
        position: "absolute",
        left: "50%",
        top: compact ? 8 : mobile ? 10 : 30,
        width: cardW,
        height: cardH,
        marginLeft: -cardW / 2,
        transformStyle: "preserve-3d",
        transform: `translate3d(${x}px,${y}px,${z}px) rotateY(${-d * theta * .9}deg) rotateZ(${d * theta * .22}deg) scale(${scale * (isHover ? 1.04 : 1)})`,
        opacity: op,
        zIndex: Math.round(100 - depth * 100),
        transition: "transform .25s cubic-bezier(.2,.7,.2,1)",
        willChange: "transform",
        pointerEvents: op < .15 ? "none" : "auto",
        cursor: center ? "pointer" : "grab"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 26,
        overflow: "hidden",
        border: `1px solid rgba(245,239,233,${isHover ? .34 : .16})`,
        boxShadow: `0 ${30 + 30 * cos}px ${80 * cos + 20}px -30px rgba(0,0,0,.9), inset 0 1px 0 rgba(245,239,233,${isHover ? .28 : .14})`,
        background: "#211B1B",
        transition: "border-color .3s,box-shadow .3s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: c.bg,
        filter: `brightness(${isHover ? 1.18 : 1})`,
        transition: "filter .3s"
      }
    }), c.img && /*#__PURE__*/React.createElement("img", {
      src: c.img,
      alt: "",
      draggable: "false",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "50% 20%",
        opacity: isHover ? .95 : .85,
        transition: "opacity .3s"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top,rgba(11,10,10,.9) 0%,rgba(11,10,10,.25) 55%,rgba(11,10,10,0) 100%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "-30%",
        top: "-40%",
        width: "80%",
        height: "70%",
        background: "linear-gradient(120deg,rgba(245,239,233,0) 30%,rgba(245,239,233,.16) 50%,rgba(245,239,233,0) 70%)",
        transform: `rotate(${12 + d * 10}deg)`,
        opacity: isHover ? 1 : .55,
        transition: "opacity .3s",
        pointerEvents: "none"
      }
    }), !c.img && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 16,
        right: 16,
        padding: "5px 11px",
        borderRadius: 999,
        background: "rgba(11,10,10,.4)",
        border: "1px solid rgba(245,239,233,.12)",
        fontSize: 11,
        color: "#E8C8AD",
        backdropFilter: "blur(10px)"
      }
    }, "\u0635\u0648\u0631\u0629 ", c.photo), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 8,
        right: 8,
        bottom: 8,
        padding: mobile || compact ? "10px 10px 8px" : "18px 18px 16px",
        borderRadius: mobile || compact ? 12 : 18,
        ...glass,
        boxShadow: "inset 0 1px 0 rgba(245,239,233,.12)",
        display: "grid",
        gap: 6,
        color: "#F5EFE9",
        direction: "rtl",
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: mobile || compact ? 26 : 36,
        height: mobile || compact ? 26 : 36,
        borderRadius: 999,
        display: "grid",
        placeItems: "center",
        background: `${c.accent}26`,
        border: `1px solid ${c.accent}66`,
        color: c.accent
      }
    }, Icon ? /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: mobile || compact ? 13 : 18
    }) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "Alexandria,sans-serif",
        fontSize: 12,
        letterSpacing: ".12em",
        color: c.accent,
        fontWeight: 600
      }
    }, "0" + (i % CARDS.length + 1))), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "4px 0 0",
        fontFamily: "Alexandria,sans-serif",
        fontWeight: 600,
        fontSize: mobile || cardW < 170 ? 18 : cardW <= 220 ? 22 : 28,
        lineHeight: 1.15
      }
    }, c.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: mobile || cardW < 170 ? 12.5 : 13.5,
        lineHeight: 1.5,
        color: "#E8C8AD",
        display: compact && cardW < 150 ? "none" : "block"
      }
    }, c.desc), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: mobile ? 12.5 : 13,
        fontWeight: 500,
        marginTop: 4,
        whiteSpace: "nowrap",
        maxHeight: !mobile && (isHover || center) ? 24 : 0,
        opacity: !mobile && (isHover || center) ? 1 : 0,
        overflow: "hidden",
        transition: "opacity .3s,max-height .3s"
      }
    }, cardW <= 220 ? "اكتشفي" : c.cta, /*#__PURE__*/React.createElement("span", {
      style: {
        color: c.accent
      }
    }, "\u2190")))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: compact ? 14 : 22,
      marginTop: compact ? 12 : 8,
      direction: "rtl"
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "\u0627\u0644\u0633\u0627\u0628\u0642",
    onClick: () => go(phys.current.target - 1),
    style: navBtn,
    onMouseEnter: e => e.currentTarget.style.background = "rgba(53,43,43,.75)",
    onMouseLeave: e => e.currentTarget.style.background = glass.background
  }, "\u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, CARDS.map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    "aria-label": c.title,
    onClick: () => goTo(i),
    style: {
      height: 44,
      padding: "0 2px",
      border: 0,
      background: "transparent",
      cursor: "pointer",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: i === active ? 26 : 8,
      height: 8,
      borderRadius: 999,
      background: i === active ? c.accent : "rgba(245,239,233,.25)",
      transition: "width .3s,background .3s"
    }
  })))), /*#__PURE__*/React.createElement("button", {
    "aria-label": "\u0627\u0644\u062A\u0627\u0644\u064A",
    onClick: () => go(phys.current.target + 1),
    style: navBtn,
    onMouseEnter: e => e.currentTarget.style.background = "rgba(53,43,43,.75)",
    onMouseLeave: e => e.currentTarget.style.background = glass.background
  }, "\u2190")));
}
window.ServiceCarousel = ServiceCarousel;
if (typeof module !== "undefined") module.exports = {
  ServiceCarousel
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/templates/landing-page/ServiceCarousel.jsx", error: String((e && e.message) || e) }); }

// site/templates/landing-page/api.js
try { (() => {
// Live availability client for the public site.
// 1. In Apps Script: Deploy → New deployment → Web app (Execute as: Me, Who has access: Anyone). Copy the /exec URL.
// 2. Paste it below. Leave empty to keep the demo slots.
// Slots come from the Google Sheet (Shifts, Bookings, Services, Settings tabs) via Availability.gs, so editing the Sheet updates the site immediately (20s server cache).
window.ALOUSH_API = (() => {
  const URL = ""; // e.g. "https://script.google.com/macros/s/AKfycb.../exec"
  const TTL = 30000; // client cache per (date, services)
  const cache = new Map();
  const toIso = d => {
    const p = n => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  };
  const to12 = t => {
    const [h, m] = t.split(":").map(Number);
    const hh = h > 12 ? h - 12 : h;
    return `${hh}:${String(m).padStart(2, "0")}`;
  };
  async function call(params) {
    const qs = new URLSearchParams(params).toString();
    const r = await fetch(`${URL}?${qs}`, {
      method: "GET",
      redirect: "follow"
    });
    const j = await r.json();
    if (!j.ok) throw new Error(j.error || "API_ERROR");
    return j.data;
  }
  async function getAvailability(date, serviceIds) {
    const key = toIso(date) + "|" + serviceIds.join(",");
    const hit = cache.get(key);
    if (hit && Date.now() - hit.t < TTL) return hit.v;
    const data = await call({
      action: "getAvailability",
      date: toIso(date),
      serviceIds: serviceIds.join(",")
    });
    const v = {
      durationMin: data.durationMin,
      slots: (data.slots || []).map(t => ({
        raw: t,
        label: to12(t)
      }))
    };
    cache.set(key, {
      t: Date.now(),
      v
    });
    return v;
  }
  return {
    enabled: !!URL,
    url: URL,
    getAvailability,
    toIso
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/templates/landing-page/api.js", error: String((e && e.message) || e) }); }

// site/templates/landing-page/ds-base.js
try { (() => {
// Loads this design system into the template. In a consuming project, point
// base at the bound DS folder relative to this file (e.g. '_ds/<folder>' at
// the project root, '../_ds/<folder>' one level down) — one line to edit.
(() => {
  const base = '../..';
  for (const p of ["tokens/fonts.css", "tokens/colors.css", "tokens/typography.css", "tokens/spacing.css", "tokens/effects.css", "tokens/base.css", "styles.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — if this is a consuming project, point the base line in ds-base.js at the bound _ds/<folder> tree relative to this page (e.g. _ds/<folder> at the project root, ../_ds/<folder> one level down); in a fresh design system this can just mean the bundle is not compiled yet');
  document.head.appendChild(s);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/templates/landing-page/ds-base.js", error: String((e && e.message) || e) }); }

// site/ui_kits/shared/salon-data.js
try { (() => {
// Shared sample data for the three prototypes. Mirrors the Google Sheets tabs (see docs/architecture.md). Sample only — never ship as production data.
window.SALON = (() => {
  const employees = [{
    id: "E1",
    name: "سارة",
    color: "var(--emp-sara)",
    hex: "#D58B91",
    role: "employee",
    skills: ["hair", "brows"]
  }, {
    id: "E2",
    name: "نور",
    color: "var(--emp-noor)",
    hex: "#C65A32",
    role: "employee",
    skills: ["nails", "makeup"]
  }, {
    id: "E3",
    name: "مريم",
    color: "var(--emp-mariam)",
    hex: "#8FAE8B",
    role: "employee",
    skills: ["nails", "brows"]
  }, {
    id: "E4",
    name: "زينب",
    color: "var(--emp-zainab)",
    hex: "#B49AD6",
    role: "employee",
    skills: ["hair", "makeup", "bridal"]
  }];
  const categories = [{
    id: "hair",
    name: "الشعر"
  }, {
    id: "nails",
    name: "الأظافر"
  }, {
    id: "brows",
    name: "الحواجب"
  }, {
    id: "makeup",
    name: "المكياج"
  }, {
    id: "bridal",
    name: "العرايس"
  }];
  const services = [{
    id: "S1",
    cat: "hair",
    name: "قص وتصفيف",
    desc: "قص مع غسيل واستشوار.",
    dur: 45,
    price: 25000,
    deposit: 0
  }, {
    id: "S2",
    cat: "hair",
    name: "صبغ شعر",
    desc: "صبغة كاملة مع غسيل.",
    dur: 120,
    price: 60000,
    deposit: 20000
  }, {
    id: "S3",
    cat: "hair",
    name: "تسريحة سهرة",
    desc: "رفع أو ويفي مع تثبيت.",
    dur: 60,
    price: 40000,
    deposit: 10000
  }, {
    id: "S4",
    cat: "nails",
    name: "مانيكير",
    desc: "تنظيف وطلاء.",
    dur: 40,
    price: 15000,
    deposit: 0
  }, {
    id: "S5",
    cat: "nails",
    name: "تركيب أظافر",
    desc: "أكريليك أو جل.",
    dur: 90,
    price: 45000,
    deposit: 15000
  }, {
    id: "S6",
    cat: "brows",
    name: "ترتيب حواجب",
    desc: "تحديد وتشذيب.",
    dur: 20,
    price: 10000,
    deposit: 0
  }, {
    id: "S7",
    cat: "makeup",
    name: "مكياج سهرة",
    desc: "مكياج كامل يدوم طول الليل.",
    dur: 60,
    price: 50000,
    deposit: 15000
  }, {
    id: "S8",
    cat: "bridal",
    name: "مكياج عروس",
    desc: "جلسة كاملة مع تجربة مسبقة.",
    dur: 180,
    price: 250000,
    deposit: 50000
  }];
  const STATUS = {
    confirmed: {
      label: "مؤكّد",
      v: "confirmed"
    },
    pending: {
      label: "بانتظار التوزيع",
      v: "pending"
    },
    progress: {
      label: "قيد الخدمة",
      v: "progress"
    },
    done: {
      label: "مكتمل",
      v: "done"
    },
    cancelled: {
      label: "ملغي",
      v: "cancelled"
    },
    unpaid: {
      label: "بانتظار الدفع",
      v: "unpaid"
    }
  };
  const PAY = {
    paid: "مدفوع",
    deposit: "عربون مدفوع",
    unpaid: "غير مدفوع",
    cash: "نقد",
    free: "مجاني"
  };
  const SRC = {
    walkin: "حضور",
    whatsapp: "واتساب",
    web: "الموقع"
  };
  const today = [{
    id: "B101",
    t: "10:00",
    cust: "هدى",
    phone: "07701234567",
    svc: "S1",
    emp: "E1",
    status: "done",
    pay: "cash",
    src: "walkin"
  }, {
    id: "B102",
    t: "10:30",
    cust: "رنا",
    phone: "07711234567",
    svc: "S4",
    emp: "E3",
    status: "progress",
    pay: "unpaid",
    src: "walkin",
    arrived: true
  }, {
    id: "B103",
    t: "11:00",
    cust: "مريم ك.",
    phone: "07721234567",
    svc: "S5",
    emp: null,
    status: "pending",
    pay: "deposit",
    src: "web"
  }, {
    id: "B104",
    t: "11:30",
    cust: "شهد",
    phone: "07731234567",
    svc: "S2",
    emp: "E4",
    status: "confirmed",
    pay: "deposit",
    src: "whatsapp"
  }, {
    id: "B105",
    t: "12:00",
    cust: "دعاء",
    phone: "07741234567",
    svc: "S6",
    emp: "E1",
    status: "confirmed",
    pay: "unpaid",
    src: "walkin",
    arrived: true
  }, {
    id: "B106",
    t: "1:00",
    cust: "آية",
    phone: "07751234567",
    svc: "S7",
    emp: null,
    status: "pending",
    pay: "deposit",
    src: "web"
  }, {
    id: "B107",
    t: "2:30",
    cust: "زهراء",
    phone: "07761234567",
    svc: "S8",
    emp: "E4",
    status: "confirmed",
    pay: "deposit",
    src: "web"
  }, {
    id: "B108",
    t: "4:00",
    cust: "نبأ",
    phone: "07771234567",
    svc: "S3",
    emp: "E1",
    status: "unpaid",
    pay: "unpaid",
    src: "web"
  }, {
    id: "B109",
    t: "5:30",
    cust: "سجى",
    phone: "07781234567",
    svc: "S4",
    emp: "E2",
    status: "cancelled",
    pay: "unpaid",
    src: "whatsapp"
  }];
  const slots = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30", "6:00", "6:30", "7:00"];
  const byId = (arr, id) => arr.find(x => x.id === id);
  const iqd = n => n.toLocaleString("ar-EG") + " د.ع";
  const ar = n => Number(n).toLocaleString("ar-EG");
  const timeAr = t => {
    const [h, m] = t.split(":");
    const hh = +h;
    return ar(hh) + ":" + m.replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]) + (hh >= 10 && hh <= 11 ? " ص" : " م");
  };
  const help = {
    pending: {
      q: "شنو يعني بانتظار التوزيع؟",
      a: "الزبونة حجزت موعد، بس بعد ما حددنا الموظفة.\n\nمثال: مريم حجزت أظافر الساعة ١٢، وسارة ونور متفرغات.\n\nاختاري وحدة منهن حتى يتحدد الموعد إلها."
    },
    walkin: {
      q: "شلون أضيف زبونة بدون موعد؟",
      a: "إذا إجت زبونة للصالون بدون حجز، اختاري الخدمة واضغطي «هسه».\n\nإذا أكو موظفة متفرغة، ينضاف الحجز مباشرة."
    },
    capacity: {
      q: "ليش ما يطلع الوقت متوفر؟",
      a: "النظام يحسب كل الموظفات اللي يعرفن هالخدمة ودوامهن واستراحاتهن والحجوزات الموجودة — حتى اللي بعد ما توزعت.\n\nإذا ما أكو وحدة تگدر تكمل الخدمة كاملة بهالوقت، ما يطلع متوفر."
    },
    deposit: {
      q: "شنو العربون؟",
      a: "مبلغ تدفعه الزبونة مقدماً حتى يثبت الحجز. ينحسب من سعر الخدمة، والباقي تدفعه بالصالون."
    },
    code: {
      q: "وين ألگي رمز الدخول؟",
      a: "الرمز تعطيج إياه مسؤولة الاستقبال. إذا ضاع أو انكشف، تگدر تلغيه وتطلع رمز جديد."
    }
  };
  return {
    employees,
    categories,
    services,
    STATUS,
    PAY,
    SRC,
    today,
    slots,
    byId,
    iqd,
    ar,
    timeAr,
    help
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/ui_kits/shared/salon-data.js", error: String((e && e.message) || e) }); }

// social/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "social/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/booking-site/Book.jsx
try { (() => {
const {
  Button,
  Card,
  Field,
  Input,
  Select,
  Checkbox,
  RadioGroup,
  Switch,
  Badge,
  Icon,
  Dialog,
  Toast,
  Tag
} = window.SalonAlloushDesignSystem_7d8ad7;
function Step({
  n,
  label,
  active,
  done
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      color: active ? "var(--text-heading)" : "var(--text-subtle)",
      font: "var(--type-label)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 99,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: done || active ? "var(--primary)" : "transparent",
      color: done || active ? "#fff" : "var(--text-subtle)",
      border: "1px solid " + (done || active ? "var(--primary)" : "var(--border-default)")
    }
  }, done ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  }) : arNum(n)), label);
}
function Book({
  preset,
  onDone
}) {
  const D = window.ALLOUSH_DATA;
  const [step, setStep] = React.useState(1);
  const [sel, setSel] = React.useState(preset ? [preset.id] : []);
  const [barber, setBarber] = React.useState("علوش");
  const [day, setDay] = React.useState(0);
  const [slot, setSlot] = React.useState(null);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [pay, setPay] = React.useState("نقداً");
  const [remind, setRemind] = React.useState(true);
  const [agree, setAgree] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const chosen = D.services.filter(s => sel.includes(s.id));
  const total = chosen.reduce((a, s) => a + s.price, 0),
    dur = chosen.reduce((a, s) => a + s.dur, 0);
  const toggle = id => setSel(x => x.includes(id) ? x.filter(i => i !== id) : [...x, id]);
  const can = step === 1 ? sel.length > 0 : step === 2 ? slot !== null : name && phone.length >= 10 && agree;
  const confirm = () => {
    setOpen(false);
    setToast(true);
    setTimeout(() => {
      setToast(false);
      onDone();
    }, 2600);
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    eyebrow: "\u0627\u0644\u062D\u062C\u0632",
    title: "\u0627\u062D\u062C\u0632\u064A \u0645\u0648\u0639\u062F\u0643\u0650",
    style: {
      paddingTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) 340px",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      paddingBottom: "var(--space-5)",
      borderBottom: "1px solid var(--border-default)",
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Step, {
    n: 1,
    label: "\u0627\u0644\u062E\u062F\u0645\u0629",
    active: step === 1,
    done: step > 1
  }), /*#__PURE__*/React.createElement(Step, {
    n: 2,
    label: "\u0627\u0644\u064A\u0648\u0645 \u0648\u0627\u0644\u0648\u0642\u062A",
    active: step === 2,
    done: step > 2
  }), /*#__PURE__*/React.createElement(Step, {
    n: 3,
    label: "\u0628\u064A\u0627\u0646\u0627\u062A\u0643",
    active: step === 3
  })), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10
    }
  }, D.services.map(s => {
    const on = sel.includes(s.id);
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      onClick: () => toggle(s.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 16px",
        background: "var(--surface-card)",
        border: "1px solid " + (on ? "var(--primary)" : "var(--border-subtle)"),
        cursor: "pointer",
        borderRadius: "var(--radius-sm)"
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: on,
      onChange: () => toggle(s.id)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        font: "var(--type-label)",
        fontSize: "var(--text-md)",
        color: "var(--text-heading)"
      }
    }, s.name), s.top && /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, "\u0627\u0644\u0623\u0643\u062B\u0631 \u0637\u0644\u0628\u0627\u064B")), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-caption)",
        color: "var(--text-muted)"
      }
    }, s.desc, " \xB7 ", arNum(s.dur), " \u062F\u0642\u064A\u0642\u0629")), /*#__PURE__*/React.createElement("b", {
      style: {
        font: "var(--type-label)",
        color: "var(--text-heading)",
        whiteSpace: "nowrap",
        flex: "none"
      }
    }, fmtIQD(s.price)));
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u0627\u0644\u0645\u062E\u062A\u0635\u0651\u0629 / \u0627\u0644\u0645\u062E\u062A\u0635"
  }, /*#__PURE__*/React.createElement(RadioGroup, {
    name: "barber",
    direction: "row",
    options: D.barbers,
    value: barber,
    onChange: setBarber
  }))), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      marginBottom: 10
    }
  }, "\u0627\u0644\u064A\u0648\u0645"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6,1fr)",
      gap: 8
    }
  }, D.days.map((d, i) => /*#__PURE__*/React.createElement("button", {
    key: d.n,
    onClick: () => {
      setDay(i);
      setSlot(null);
    },
    style: {
      all: "unset",
      cursor: "pointer",
      textAlign: "center",
      padding: "12px 0",
      background: day === i ? "var(--primary)" : "var(--surface-card)",
      color: day === i ? "#fff" : "var(--text-heading)",
      border: "1px solid " + (day === i ? "var(--primary)" : "var(--border-default)"),
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      opacity: .8
    }
  }, d.d), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h3)",
      color: "inherit"
    }
  }, d.n))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      marginBottom: 10
    }
  }, "\u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u062A\u0627\u062D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, D.slots.map(t => {
    const tk = D.taken.includes(t);
    return /*#__PURE__*/React.createElement(Tag, {
      key: t,
      selected: slot === t,
      onSelect: tk ? undefined : () => setSlot(t),
      style: tk ? {
        opacity: .4,
        textDecoration: "line-through"
      } : undefined
    }, t);
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-subtle)",
      marginTop: 10
    }
  }, "\u0627\u0644\u0645\u062F\u0629 \u0627\u0644\u062A\u0642\u0631\u064A\u0628\u064A\u0629 ", arNum(dur), " \u062F\u0642\u064A\u0642\u0629. \u0627\u0644\u0623\u0648\u0642\u0627\u062A \u0627\u0644\u0645\u0634\u0637\u0648\u0628\u0629 \u0645\u062D\u062C\u0648\u0632\u0629."))), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\u0627\u0644\u0627\u0633\u0645",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "user",
    placeholder: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644",
    value: name,
    onChange: e => setName(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
    required: true,
    hint: "\u0633\u0646\u0631\u0633\u0644 \u0627\u0644\u062A\u0623\u0643\u064A\u062F \u0648\u0627\u0644\u062A\u0630\u0643\u064A\u0631 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0631\u0642\u0645"
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "phone",
    type: "tel",
    dir: "ltr",
    placeholder: "07xx xxx xxxx",
    value: phone,
    onChange: e => setPhone(e.target.value),
    style: {
      textAlign: "left"
    }
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639"
  }, /*#__PURE__*/React.createElement(RadioGroup, {
    name: "pay",
    direction: "row",
    options: ["نقداً", "بطاقة"],
    value: pay,
    onChange: setPay
  })), /*#__PURE__*/React.createElement(Switch, {
    checked: remind,
    onChange: setRemind,
    label: "\u062A\u0630\u0643\u064A\u0631 \u0642\u0628\u0644 \u0627\u0644\u0645\u0648\u0639\u062F \u0628\u0633\u0627\u0639\u0629"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: agree,
    onChange: setAgree,
    label: "\u0623\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u0625\u0644\u063A\u0627\u0621 (\u0645\u062C\u0627\u0646\u064A \u0642\u0628\u0644 \u0633\u0627\u0639\u062A\u064A\u0646)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: "var(--space-8)"
    }
  }, step < 3 ? /*#__PURE__*/React.createElement(Button, {
    disabled: !can,
    iconEnd: "chevron-left",
    onClick: () => setStep(step + 1)
  }, "\u0627\u0644\u062A\u0627\u0644\u064A") : /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    disabled: !can,
    icon: "check",
    onClick: () => setOpen(true)
  }, "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u062C\u0632"), step > 1 && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(step - 1)
  }, "\u0631\u062C\u0648\u0639"))), /*#__PURE__*/React.createElement(Card, {
    accentRule: true,
    style: {
      position: "sticky",
      top: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-caps)",
      color: "var(--text-accent)"
    }
  }, "\u0645\u0644\u062E\u0635 \u0627\u0644\u062D\u062C\u0632"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10,
      marginTop: 16
    }
  }, chosen.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-subtle)",
      font: "var(--type-body-sm)"
    }
  }, "\u0644\u0645 \u062A\u062E\u062A\u0627\u0631\u064A \u062E\u062F\u0645\u0629 \u0628\u0639\u062F."), chosen.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", null, s.name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      whiteSpace: "nowrap",
      flex: "none"
    }
  }, fmtIQD(s.price))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8,
      marginTop: 16,
      paddingTop: 16,
      borderTop: "1px solid var(--border-subtle)",
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 16
  }), barber), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 16
  }), D.days[day].d, " ", D.days[day].n, " \u062A\u0634\u0631\u064A\u0646 \u0627\u0644\u062B\u0627\u0646\u064A", slot ? " · " + slot : ""), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16
  }), arNum(dur), " \u062F\u0642\u064A\u0642\u0629")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginTop: 16,
      paddingTop: 16,
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)"
    }
  }, "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A"), /*#__PURE__*/React.createElement("b", {
    style: {
      font: "var(--type-h2)",
      color: "var(--text-heading)",
      whiteSpace: "nowrap"
    }
  }, fmtIQD(total)))))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: () => setOpen(false),
    title: "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u062C\u0632",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: confirm
    }, "\u062A\u0623\u0643\u064A\u062F"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "\u0631\u062C\u0648\u0639"))
  }, /*#__PURE__*/React.createElement("p", null, chosen.map(s => s.name).join("، "), " \u0645\u0639 ", barber, "\u060C ", D.days[day].d, " ", D.days[day].n, " \u062A\u0634\u0631\u064A\u0646 \u0627\u0644\u062B\u0627\u0646\u064A \u0627\u0644\u0633\u0627\u0639\u0629 ", slot, "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      color: "var(--text-muted)",
      font: "var(--type-body-sm)"
    }
  }, "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A ", fmtIQD(total), " \xB7 \u0627\u0644\u062F\u0641\u0639 ", pay, " \u0641\u064A \u0627\u0644\u0635\u0627\u0644\u0648\u0646.")), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 24,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center",
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "\u062A\u0645 \u0627\u0644\u062D\u062C\u0632",
    message: "نراكِ " + D.days[day].d + " الساعة " + slot
  })));
}
Object.assign(window, {
  Book
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking-site/Book.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking-site/Home.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Icon,
  Tag
} = window.SalonAlloushDesignSystem_7d8ad7;
function ServiceCard({
  s,
  onBook
}) {
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    onClick: () => onBook(s),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", null, s.name), s.top && /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "\u0627\u0644\u0623\u0643\u062B\u0631 \u0637\u0644\u0628\u0627\u064B")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      font: "var(--type-body-sm)"
    }
  }, s.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginTop: "auto",
      paddingTop: 12,
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 6,
      alignItems: "center",
      color: "var(--text-muted)",
      font: "var(--type-caption)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14
  }), arNum(s.dur), " \u062F\u0642\u064A\u0642\u0629"), /*#__PURE__*/React.createElement("b", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-heading)",
      whiteSpace: "nowrap",
      flex: "none"
    }
  }, fmtIQD(s.price))));
}
function Home({
  go,
  onBook
}) {
  const D = window.ALLOUSH_DATA;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-20) var(--container-pad)",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-caps)",
      color: "var(--accent-on-dark)",
      marginBottom: 16
    }
  }, "\u0627\u0644\u0628\u0646\u0648\u0643 \xB7 \u0628\u063A\u062F\u0627\u062F"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "var(--text-on-inverse)",
      fontSize: "var(--text-5xl)",
      maxWidth: 520
    }
  }, "\u0625\u0637\u0644\u0627\u0644\u0629 \u062A\u0644\u064A\u0642 \u0628\u0643\u0650"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-100)",
      marginTop: 20,
      maxWidth: 460,
      fontSize: "var(--text-lg)"
    }
  }, "\u062A\u0633\u0631\u064A\u062D\u0627\u062A\u060C \u0645\u0643\u064A\u0627\u062C\u060C \u0648\u0635\u0628\u063A\u0629 \u0628\u064A\u062F \u0639\u0644\u0648\u0634. \u0627\u062D\u062C\u0632\u064A \u0648\u0642\u062A\u0643\u0650 \u0645\u0633\u0628\u0642\u0627\u064B \u0648\u0627\u062F\u062E\u0644\u064A \u0628\u062F\u0648\u0646 \u0627\u0646\u062A\u0638\u0627\u0631."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    icon: "calendar",
    onClick: () => go("book")
  }, "\u0627\u062D\u062C\u0632\u064A \u0645\u0648\u0639\u062F"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => go("services")
  }, "\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0648\u0627\u0644\u0623\u0633\u0639\u0627\u0631")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      marginTop: 40,
      font: "var(--type-body-sm)",
      color: "var(--ink-300)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16
  }), "\u064A\u0648\u0645\u064A\u0627\u064B \u0661\u0660 \u0635 \u2013 \u0661\u0660 \u0645"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 16
  }), "\u0664\u066B\u0668 \u0645\u0646 \u0661\u0662\u0660 \u062A\u0642\u064A\u064A\u0645"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4/5",
      maxHeight: 520,
      justifySelf: "end",
      width: "100%",
      maxWidth: 420,
      position: "relative",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero.jpg",
    alt: "\u0639\u0644\u0648\u0634 \u064A\u062B\u0628\u0651\u062A \u062A\u0627\u062C \u0627\u0644\u0639\u0631\u0648\u0633",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "60% 20%",
      display: "block",
      filter: "grayscale(1)"
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A",
    title: "\u0627\u0644\u0623\u0643\u062B\u0631 \u0637\u0644\u0628\u0627\u064B",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconEnd: "chevron-left",
      onClick: () => go("services")
    }, "\u0643\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--space-4)"
    }
  }, D.services.slice(0, 6).map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.id,
    s: s,
    onBook: onBook
  })))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "\u0643\u064A\u0641 \u064A\u0639\u0645\u0644 \u0627\u0644\u062D\u062C\u0632",
    title: "\u062B\u0644\u0627\u062B \u062E\u0637\u0648\u0627\u062A"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-8)"
    }
  }, [["sparkles", "اختاري الخدمة", "من القائمة، أو أكثر من خدمة في موعد واحد"], ["calendar", "اختاري اليوم والوقت", "المواعيد المتاحة تظهر مباشرة"], ["check", "تأكيد", "تصلكِ رسالة تأكيد، وتذكير قبل الموعد بساعة"]].map(([i, t, d], n) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: "2px solid var(--accent)",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      color: "var(--text-heading)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 22
  }), /*#__PURE__*/React.createElement("h3", null, t)), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      marginTop: 8
    }
  }, d))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "\u0622\u0631\u0627\u0621 \u0627\u0644\u0632\u0628\u0627\u0626\u0646",
    title: "\u0645\u0627 \u064A\u0642\u0648\u0644\u0648\u0646\u0647"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-4)"
    }
  }, D.reviews.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      color: "var(--accent)"
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: 16,
    color: i < r.s ? "var(--ink-950)" : "var(--paper-300)"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: "var(--text-lg)"
    }
  }, r.t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      font: "var(--type-label)",
      color: "var(--text-muted)"
    }
  }, r.n))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      padding: "var(--space-10)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "\u062C\u0627\u0647\u0632\u061F"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      marginTop: 6
    }
  }, "\u0627\u062D\u062C\u0632\u064A \u0627\u0644\u0622\u0646\u060C \u0627\u0644\u0625\u0644\u063A\u0627\u0621 \u0645\u062C\u0627\u0646\u064A \u0642\u0628\u0644 \u0633\u0627\u0639\u062A\u064A\u0646 \u0645\u0646 \u0627\u0644\u0645\u0648\u0639\u062F.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "calendar",
    onClick: () => go("book")
  }, "\u0627\u062D\u062C\u0632\u064A \u0645\u0648\u0639\u062F"))));
}
Object.assign(window, {
  Home,
  ServiceCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking-site/Location.jsx
try { (() => {
const {
  Button,
  Card,
  Icon
} = window.SalonAlloushDesignSystem_7d8ad7;
function Location() {
  const D = window.ALLOUSH_DATA;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    eyebrow: "\u0627\u0644\u0645\u0648\u0642\u0639",
    title: "\u0643\u064A\u0641 \u062A\u0635\u0644 \u0625\u0644\u064A\u0646\u0627",
    style: {
      paddingTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16/10",
      background: "var(--surface-sunken)",
      border: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-subtle)",
      font: "var(--type-caption)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 28,
    style: {
      position: "absolute",
      color: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 16
    }
  }, "\u062E\u0631\u064A\u0637\u0629 \u2014 \u062A\u064F\u0633\u062A\u0628\u062F\u0644 \u0628\u062E\u0631\u064A\u0637\u0629 \u062D\u0642\u064A\u0642\u064A\u0629")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 22,
    style: {
      color: "var(--accent)",
      flex: "none",
      marginTop: 4
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6
    }
  }, D.address), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      font: "var(--type-body-sm)"
    }
  }, D.city)))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 22,
    style: {
      color: "var(--accent)",
      flex: "none",
      marginTop: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", null, "\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644"), D.hours.map(([d, h]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-body-sm)",
      padding: "8px 0",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", null, d), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, h)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "navigation",
    full: true
  }, "\u0627\u0641\u062A\u062D \u0641\u064A \u0627\u0644\u062E\u0631\u0627\u0626\u0637"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "phone",
    full: true
  }, "\u0627\u062A\u0635\u0644"))))));
}
Object.assign(window, {
  Location
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking-site/Location.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking-site/Services.jsx
try { (() => {
const {
  Tabs,
  Tag,
  Input
} = window.SalonAlloushDesignSystem_7d8ad7;
function Services({
  onBook
}) {
  const D = window.ALLOUSH_DATA;
  const [cat, setCat] = React.useState("الكل");
  const [q, setQ] = React.useState("");
  const list = D.services.filter(s => (cat === "الكل" || s.cat === cat) && s.name.includes(q));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    eyebrow: "\u0627\u0644\u0642\u0627\u0626\u0645\u0629",
    title: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0648\u0627\u0644\u0623\u0633\u0639\u0627\u0631",
    style: {
      paddingTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap",
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, D.cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: cat === c,
    onSelect: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "\u0627\u0628\u062D\u062B \u0639\u0646 \u062E\u062F\u0645\u0629",
    value: q,
    onChange: e => setQ(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--space-4)"
    }
  }, list.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.id,
    s: s,
    onBook: onBook
  }))), list.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      textAlign: "center",
      padding: 40
    }
  }, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u062F\u0645\u0629 \u0628\u0647\u0630\u0627 \u0627\u0644\u0627\u0633\u0645."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-subtle)",
      marginTop: "var(--space-8)"
    }
  }, "\u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0628\u0627\u0644\u062F\u064A\u0646\u0627\u0631 \u0627\u0644\u0639\u0631\u0627\u0642\u064A \u0648\u062A\u0634\u0645\u0644 \u0643\u0644 \u0634\u064A\u0621. \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0639\u0631\u0648\u0633 \u062A\u0634\u0645\u0644 \u062C\u0644\u0633\u0629 \u062A\u062C\u0631\u0628\u0629 \u0645\u0633\u0628\u0642\u0629.")));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking-site/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking-site/Shell.jsx
try { (() => {
const {
  Button,
  IconButton,
  Wordmark,
  Icon
} = window.SalonAlloushDesignSystem_7d8ad7;
function TopBar({
  go,
  page
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "var(--surface-inverse)",
      color: "var(--text-on-inverse)",
      borderBottom: "1px solid var(--border-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-pad)",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "inverse",
    size: "sm"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      font: "var(--type-label)"
    }
  }, [["home", "الرئيسية"], ["services", "الخدمات"], ["location", "الموقع"]].map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(k);
    },
    style: {
      color: page === k ? "var(--accent-on-dark)" : "var(--paper-100)",
      textDecoration: "none",
      borderBottom: page === k ? "2px solid var(--accent)" : "2px solid transparent",
      paddingBottom: 4
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "phone",
    label: "\u0627\u062A\u0635\u0644",
    variant: "inverse",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    icon: "calendar",
    onClick: () => go("book")
  }, "\u0627\u062D\u062C\u0632\u064A \u0645\u0648\u0639\u062F"))));
}
function Footer({
  go
}) {
  const D = window.ALLOUSH_DATA;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-inverse-deep)",
      color: "var(--text-on-inverse)",
      marginTop: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--container-pad) var(--space-8)",
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr 1fr",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "inverse"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-300)",
      font: "var(--type-body-sm)",
      marginTop: 16,
      maxWidth: 300
    }
  }, "\u0635\u0627\u0644\u0648\u0646 \u0646\u0633\u0627\u0626\u064A \u0641\u064A \u0627\u0644\u0628\u0646\u0648\u0643\u060C \u0628\u063A\u062F\u0627\u062F. \u062A\u0633\u0631\u064A\u062D\u0627\u062A\u060C \u0645\u0643\u064A\u0627\u062C\u060C \u0635\u0628\u063A\u0629 \u0648\u0639\u0646\u0627\u064A\u0629 \u2014 \u0628\u0627\u0644\u062D\u062C\u0632 \u0627\u0644\u0645\u0633\u0628\u0642.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-caps)",
      color: "var(--accent-on-dark)",
      marginBottom: 14
    }
  }, "\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644"), D.hours.map(([d, h]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-body-sm)",
      padding: "6px 0",
      borderBottom: "1px solid var(--border-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("span", null, d), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-300)"
    }
  }, h)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-caps)",
      color: "var(--accent-on-dark)",
      marginBottom: 14
    }
  }, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--paper-100)"
    }
  }, D.address), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--ink-300)",
      marginTop: 4
    }
  }, D.city), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("location");
    },
    style: {
      display: "inline-flex",
      gap: 6,
      alignItems: "center",
      marginTop: 12,
      color: "var(--accent-on-dark)",
      font: "var(--type-label)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16
  }), "\u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-4) var(--container-pad)",
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-caption)",
      color: "var(--ink-300)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 \u0662\u0660\u0662\u0666 \u0635\u0627\u0644\u0648\u0646 \u0627\u0644\u0643\u0648\u0627\u0641\u064A\u0631 \u0639\u0644\u0648\u0634"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "instagram",
    label: "\u0627\u0646\u0633\u062A\u063A\u0631\u0627\u0645",
    variant: "inverse",
    size: "sm"
  }), /*#__PURE__*/React.createElement(IconButton, {
    name: "facebook",
    label: "\u0641\u064A\u0633\u0628\u0648\u0643",
    variant: "inverse",
    size: "sm"
  })))));
}
function Section({
  eyebrow,
  title,
  action,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--section-gap) var(--container-pad) 0",
      ...style
    }
  }, (title || eyebrow) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-caps)",
      color: "var(--text-accent)",
      marginBottom: 10
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", null, title)), action), children);
}
Object.assign(window, {
  TopBar,
  Footer,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking-site/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking-site/data.js
try { (() => {
window.ALLOUSH_DATA = {
  services: [{
    id: "bride",
    cat: "عروس",
    name: "تسريحة ومكياج عروس",
    desc: "جلسة كاملة مع تجربة مسبقة",
    dur: 180,
    price: 250000,
    top: true
  }, {
    id: "bridehair",
    cat: "عروس",
    name: "تسريحة عروس",
    desc: "تثبيت التاج والطرحة",
    dur: 90,
    price: 120000
  }, {
    id: "evening",
    cat: "مكياج",
    name: "مكياج سهرة",
    desc: "مكياج كامل يدوم طوال الليل",
    dur: 60,
    price: 50000
  }, {
    id: "soft",
    cat: "مكياج",
    name: "مكياج ناعم",
    desc: "إطلالة يومية خفيفة",
    dur: 40,
    price: 30000
  }, {
    id: "updo",
    cat: "شعر",
    name: "تسريحة سهرة",
    desc: "رفع أو ويفي مع تثبيت",
    dur: 60,
    price: 40000
  }, {
    id: "blow",
    cat: "شعر",
    name: "استشوار",
    desc: "غسيل وتجفيف وتصفيف",
    dur: 40,
    price: 15000
  }, {
    id: "color",
    cat: "صبغة",
    name: "صبغة كاملة",
    desc: "تشمل الغسيل والاستشوار",
    dur: 120,
    price: 60000
  }, {
    id: "high",
    cat: "صبغة",
    name: "هايلايت",
    desc: "خصل مع تونر",
    dur: 150,
    price: 90000
  }, {
    id: "keratin",
    cat: "عناية",
    name: "بروتين / كيراتين",
    desc: "حسب طول الشعر",
    dur: 180,
    price: 150000
  }],
  cats: ["الكل", "عروس", "مكياج", "شعر", "صبغة", "عناية"],
  barbers: ["علوش", "أي مختصة متاحة"],
  days: [{
    d: "الخميس",
    n: "١٢"
  }, {
    d: "الجمعة",
    n: "١٣"
  }, {
    d: "السبت",
    n: "١٤"
  }, {
    d: "الأحد",
    n: "١٥"
  }, {
    d: "الاثنين",
    n: "١٦"
  }, {
    d: "الثلاثاء",
    n: "١٧"
  }],
  slots: ["١٠:٠٠ ص", "١١:٠٠ ص", "١٢:٠٠ م", "١:٣٠ م", "٣:٠٠ م", "٤:٣٠ م", "٦:٠٠ م", "٧:٣٠ م", "٩:٠٠ م"],
  taken: ["١١:٠٠ ص", "٣:٠٠ م"],
  hours: [["السبت – الخميس", "١٠:٠٠ ص – ١٠:٠٠ م"], ["الجمعة", "٢:٠٠ م – ١٠:٠٠ م"]],
  address: "البنوك، شارع بانزين خانه، مقابيل بيت المدلل، مجاور الكوخ، بنايه مندي الجزيرة، طابق ثاني",
  city: "بغداد، العراق",
  reviews: [{
    n: "نور م.",
    t: "تسريحة العرس كانت أحلى من الصور، وثبتت للصبح.",
    s: 5
  }, {
    n: "زهراء ك.",
    t: "مكياج ناعم ومرتب، والحجز وفّر عليّ الانتظار.",
    s: 5
  }, {
    n: "سارة ع.",
    t: "الصبغة طلعت مثل ما طلبت، بس الموعد تأخر شوية.",
    s: 4
  }]
};
window.fmtIQD = n => n.toLocaleString("ar-EG") + " د.ع";
window.arNum = n => n.toLocaleString("ar-EG");
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking-site/data.js", error: String((e && e.message) || e) }); }

// ui_kits/employee/screens.jsx
try { (() => {
// Employee dashboard screens — intentionally simpler than the receptionist app.
const {
  useState: uS
} = React;
const S = window.SALON;
function LoginScreen({
  onLogin
}) {
  const [code, setCode] = uS("");
  const [err, setErr] = uS(false);
  const [busy, setBusy] = uS(false);
  const press = d => {
    if (busy) return;
    setErr(false);
    if (d === "del") return setCode(c => c.slice(0, -1));
    if (code.length >= 6) return;
    const n = code + d;
    setCode(n);
    if (n.length === 6) {
      setBusy(true);
      setTimeout(() => {
        setBusy(false);
        if (!onLogin(n)) {
          setErr(true);
          setCode("");
        }
      }, 500);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 22,
      minHeight: "calc(100% - 80px)",
      alignContent: "center",
      justifyItems: "center",
      textAlign: "center",
      paddingBottom: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Alexandria,sans-serif",
      fontWeight: 700,
      fontSize: 30,
      color: "var(--ink)"
    }
  }, "\u0639\u0644\u0648\u0634"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(H2, null, "\u062F\u062E\u0648\u0644 \u0627\u0644\u0645\u0648\u0638\u0641\u0627\u062A"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--ink-3)"
    }
  }, "\u0623\u062F\u062E\u0644\u064A \u0631\u0645\u0632 \u0627\u0644\u062F\u062E\u0648\u0644")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      direction: "ltr"
    }
  }, Array.from({
    length: 6
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 16,
      height: 16,
      borderRadius: 99,
      background: i < code.length ? "var(--ink)" : "transparent",
      border: "1.5px solid " + (err ? "var(--st-cancelled)" : "var(--ink-3)"),
      transition: "background .15s"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 22,
      fontSize: 13,
      color: err ? "var(--st-cancelled)" : "var(--ink-4)"
    }
  }, err ? "رمز الدخول مو صحيح. تأكدي منه وحاولي مرة ثانية." : busy ? "جارٍ التحقق…" : "تجريبي: ١١١١١١ سارة · ٢٢٢٢٢٢ نور · ٣٣٣٣٣٣ مريم · ٤٤٤٤٤٤ زينب"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,72px)",
      gap: 12,
      direction: "ltr"
    }
  }, ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"].map((k, i) => k === "" ? /*#__PURE__*/React.createElement("span", {
    key: i
  }) : /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => press(k),
    style: {
      width: 72,
      height: 72,
      borderRadius: 999,
      ...window.G,
      color: "var(--ink)",
      fontFamily: "Alexandria,sans-serif",
      fontWeight: 500,
      fontSize: 26,
      cursor: "pointer",
      display: "grid",
      placeItems: "center"
    }
  }, k === "del" ? /*#__PURE__*/React.createElement(Ic, {
    name: "delete",
    size: 22
  }) : S.ar(k)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12.5,
      color: "var(--ink-4)"
    }
  }, /*#__PURE__*/React.createElement(Help, {
    k: "code",
    inline: true
  }), "\u0648\u064A\u0646 \u0623\u0644\u06AF\u064A \u0631\u0645\u0632 \u0627\u0644\u062F\u062E\u0648\u0644\u061F"));
}
function EmpToday({
  me,
  mine,
  setBookings,
  toast,
  logout
}) {
  const live = mine.filter(b => b.status !== "cancelled");
  const now = live.find(b => b.status === "progress");
  const next = live.find(b => b.status === "confirmed" || b.status === "unpaid");
  const upd = (id, patch) => setBookings(bs => bs.map(x => x.id === id ? {
    ...x,
    ...patch
  } : x));
  const act = b => {
    if (b.status === "progress") return /*#__PURE__*/React.createElement(Btn, {
      small: true,
      kind: "light",
      icon: "check",
      onClick: () => {
        upd(b.id, {
          status: "done"
        });
        toast("اكتملت الخدمة");
      }
    }, "\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062E\u062F\u0645\u0629");
    if (b.status === "confirmed" && b.arrived) return /*#__PURE__*/React.createElement(Btn, {
      small: true,
      kind: "light",
      icon: "play",
      onClick: () => {
        upd(b.id, {
          status: "progress"
        });
        toast("بدأت الخدمة");
      }
    }, "\u0628\u062F\u0621 \u0627\u0644\u062E\u062F\u0645\u0629");
    if (b.status === "confirmed") return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
      small: true,
      icon: "door-open",
      onClick: () => {
        upd(b.id, {
          arrived: true
        });
        toast("تم تسجيل الوصول");
      }
    }, "\u0648\u0635\u0644\u062A"), /*#__PURE__*/React.createElement(Btn, {
      small: true,
      kind: "ghost",
      icon: "calendar-clock",
      onClick: () => toast("انرسل طلب التغيير للاستقبال", "pending")
    }, "\u0637\u0644\u0628 \u062A\u063A\u064A\u064A\u0631"));
    return null;
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 0 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: me.name,
    color: me.hex,
    size: 46
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0647\u0644\u0627"), /*#__PURE__*/React.createElement(H2, null, me.name))), /*#__PURE__*/React.createElement(IconBtn, {
    name: "log-out",
    label: "\u062E\u0631\u0648\u062C",
    onClick: logout
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: live.length,
    label: "\u0645\u0648\u0627\u0639\u064A\u062F\u064A \u0627\u0644\u064A\u0648\u0645"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: live.filter(b => b.status === "done").length,
    label: "\u062E\u0644\u0635\u062A",
    tone: "done"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: live.filter(b => ["confirmed", "unpaid"].includes(b.status)).length,
    label: "\u0628\u0627\u0642\u064A\u0629"
  })), now && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0647\u0633\u0647 \u0639\u0646\u062F\u062C"), /*#__PURE__*/React.createElement(ApptCard, {
    b: now,
    actions: act(now)
  })), next && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0627\u0644\u062C\u0627\u064A"), /*#__PURE__*/React.createElement(ApptCard, {
    b: next,
    actions: act(next)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0643\u0644 \u0627\u0644\u064A\u0648\u0645"), live.filter(b => b !== now && b !== next).map(b => /*#__PURE__*/React.createElement(ApptCard, {
    key: b.id,
    b: b,
    compact: true,
    actions: act(b)
  })), live.length === 0 && /*#__PURE__*/React.createElement(Glass, {
    style: {
      textAlign: "center",
      color: "var(--ink-3)",
      fontSize: 14,
      padding: 28
    }
  }, "\u0645\u0627\u0643\u0648 \u0645\u0648\u0627\u0639\u064A\u062F \u0627\u0644\u064A\u0648\u0645.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120
    }
  }));
}
function MineScreen({
  me,
  mine
}) {
  const [tab, setTab] = uS("up");
  const up = mine.filter(b => !["done", "cancelled"].includes(b.status));
  const past = mine.filter(b => ["done", "cancelled"].includes(b.status));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 0 4px"
    }
  }, /*#__PURE__*/React.createElement(H2, null, "\u0645\u0648\u0627\u0639\u064A\u062F\u064A")), /*#__PURE__*/React.createElement(Segmented, {
    value: tab,
    onChange: setTab,
    options: [{
      v: "up",
      l: "الجاية"
    }, {
      v: "past",
      l: "السابقة"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10
    }
  }, (tab === "up" ? up : past).map(b => /*#__PURE__*/React.createElement(ApptCard, {
    key: b.id,
    b: b,
    compact: true
  })), (tab === "up" ? up : past).length === 0 && /*#__PURE__*/React.createElement(Glass, {
    style: {
      textAlign: "center",
      color: "var(--ink-3)",
      fontSize: 14,
      padding: 28
    }
  }, "\u0645\u0627\u0643\u0648 \u0645\u0648\u0627\u0639\u064A\u062F.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: "var(--ink-4)",
      textAlign: "center"
    }
  }, "\u062A\u0634\u0648\u0641\u064A\u0646 \u0628\u0633 \u0645\u0648\u0627\u0639\u064A\u062F\u062C. \u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u0645\u0648\u0638\u0641\u0627\u062A \u0627\u0644\u062B\u0627\u0646\u064A\u0627\u062A \u062E\u0627\u0635\u0629."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120
    }
  }));
}
function ShiftScreen({
  me,
  toast
}) {
  const [leave, setLeave] = uS(false);
  const days = [["السبت", "١٠ ص – ٨ م"], ["الأحد", "١٠ ص – ٨ م"], ["الاثنين", "عطلة"], ["الثلاثاء", "١٠ ص – ٨ م"], ["الأربعاء", "١٠ ص – ٨ م"], ["الخميس", "١٠ ص – ٨ م"], ["الجمعة", "٢ م – ٨ م"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 0 4px"
    }
  }, /*#__PURE__*/React.createElement(H2, null, "\u062F\u0648\u0627\u0645\u064A")), /*#__PURE__*/React.createElement(Glass, {
    pad: 14,
    radius: 18,
    style: {
      display: "grid",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0627\u0644\u064A\u0648\u0645 \xB7 \u0627\u0644\u062E\u0645\u064A\u0633"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Alexandria,sans-serif",
      fontWeight: 700,
      fontSize: 22,
      color: "var(--ink)"
    }
  }, "\u0661\u0660:\u0660\u0660 \u0635 \u2013 \u0668:\u0660\u0660 \u0645"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-3)"
    }
  }, "\u0627\u0633\u062A\u0631\u0627\u062D\u0629 \u0662:\u0660\u0660 \u2013 \u0662:\u0663\u0660 \u0645")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    small: true,
    full: true,
    icon: "coffee",
    onClick: () => toast("انرسل طلب استراحة إضافية", "pending")
  }, "\u0637\u0644\u0628 \u0627\u0633\u062A\u0631\u0627\u062D\u0629"), /*#__PURE__*/React.createElement(Btn, {
    small: true,
    full: true,
    icon: "calendar-x",
    onClick: () => setLeave(true)
  }, "\u0637\u0644\u0628 \u0625\u062C\u0627\u0632\u0629"))), /*#__PURE__*/React.createElement(Glass, {
    pad: 0,
    radius: 18,
    style: {
      overflow: "hidden"
    }
  }, days.map(([d, h], i) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "12px 16px",
      borderTop: i ? "1px solid rgba(245,239,233,.08)" : 0,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink)"
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      color: h === "عطلة" ? "var(--ink-4)" : "var(--ink-2)"
    }
  }, h)))), /*#__PURE__*/React.createElement(Glass, {
    pad: 14,
    radius: 18,
    style: {
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0637\u0644\u0628\u0627\u062A\u064A"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink)"
    }
  }, "\u0625\u062C\u0627\u0632\u0629 \xB7 \u0627\u0644\u0627\u062B\u0646\u064A\u0646 \u0661\u0666"), /*#__PURE__*/React.createElement(StatusPill, {
    status: "pending"
  }))), leave && /*#__PURE__*/React.createElement(Sheet, {
    onClose: () => setLeave(false),
    title: "\u0637\u0644\u0628 \u0625\u062C\u0627\u0632\u0629"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\u0627\u0644\u064A\u0648\u0645"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u0645\u062B\u0644\u0627\u064B: \u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621 \u0661\u0667"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u0627\u0644\u0633\u0628\u0628 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u2026"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12.5,
      color: "var(--ink-4)"
    }
  }, "\u0625\u0630\u0627 \u0639\u0646\u062F\u062C \u0645\u0648\u0627\u0639\u064A\u062F \u0628\u0647\u0627\u0644\u064A\u0648\u0645\u060C \u0627\u0644\u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0631\u0627\u062D \u064A\u0639\u064A\u062F \u062A\u0648\u0632\u064A\u0639\u0647\u0627 \u0642\u0628\u0644 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "light",
    full: true,
    onClick: () => {
      setLeave(false);
      toast("انرسل طلب الإجازة", "pending");
    }
  }, "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628"), /*#__PURE__*/React.createElement(Btn, {
    kind: "ghost",
    onClick: () => setLeave(false)
  }, "\u0631\u062C\u0648\u0639"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120
    }
  }));
}
Object.assign(window, {
  LoginScreen,
  EmpToday,
  MineScreen,
  ShiftScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/employee/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/receptionist/screens.jsx
try { (() => {
// Receptionist dashboard screens
const {
  useState: uS,
  useMemo
} = React;
const S = window.SALON;
function Header({
  title,
  sub,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
      padding: "10px 0 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 2
    }
  }, sub && /*#__PURE__*/React.createElement(Eyebrow, null, sub), /*#__PURE__*/React.createElement(H2, null, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, right));
}
function TodayScreen({
  bookings,
  setBookings,
  go,
  openAssign,
  openQuick,
  toast
}) {
  const live = bookings.filter(b => b.status !== "cancelled");
  const inSalon = live.filter(b => b.arrived || b.status === "progress").length;
  const pending = live.filter(b => b.status === "pending").length;
  const unpaid = live.filter(b => b.pay === "unpaid" && b.status !== "done").length;
  const busy = new Set(live.filter(b => b.status === "progress").map(b => b.emp));
  const [tab, setTab] = uS("next");
  const list = tab === "next" ? live.filter(b => ["confirmed", "pending", "unpaid"].includes(b.status)) : tab === "now" ? live.filter(b => b.status === "progress" || b.arrived) : live.filter(b => b.status === "done");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Header, {
    sub: "\u0627\u0644\u062E\u0645\u064A\u0633 \u0661\u0662 \u062A\u0634\u0631\u064A\u0646 \u0627\u0644\u062B\u0627\u0646\u064A",
    title: "\u0627\u0644\u064A\u0648\u0645",
    right: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconBtn, {
      name: "search",
      label: "\u0628\u062D\u062B"
    }), /*#__PURE__*/React.createElement(IconBtn, {
      name: "bell",
      label: "\u062A\u0646\u0628\u064A\u0647\u0627\u062A",
      badge: pending + (unpaid ? 1 : 0)
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: live.length,
    label: "\u0645\u0648\u0627\u0639\u064A\u062F \u0627\u0644\u064A\u0648\u0645"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: inSalon,
    label: "\u0628\u0627\u0644\u0635\u0627\u0644\u0648\u0646 \u0647\u0633\u0647",
    tone: "progress"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: pending,
    label: "\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u0648\u0632\u064A\u0639",
    tone: "pending"
  })), /*#__PURE__*/React.createElement(Glass, {
    pad: 14,
    radius: 18,
    style: {
      display: "grid",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0627\u0644\u0645\u0648\u0638\u0641\u0627\u062A"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go("staff"),
    style: {
      all: "unset",
      cursor: "pointer",
      fontSize: 12,
      color: "var(--ink-2)"
    }
  }, "\u0627\u0644\u0643\u0644 \u2190")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      overflowX: "auto",
      paddingBottom: 2
    }
  }, S.employees.map(e => {
    const isBusy = busy.has(e.id);
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      style: {
        display: "grid",
        justifyItems: "center",
        gap: 5,
        minWidth: 56
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: e.name,
      color: e.hex,
      size: 44
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        bottom: 0,
        insetInlineEnd: 0,
        width: 12,
        height: 12,
        borderRadius: 99,
        border: "2px solid #211B1B",
        background: isBusy ? "var(--st-progress)" : "var(--st-confirmed)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--ink)"
      }
    }, e.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        color: isBusy ? "var(--st-progress)" : "var(--st-confirmed)",
        fontWeight: 600
      }
    }, isBusy ? "مشغولة" : "متفرغة"));
  }))), pending > 0 && /*#__PURE__*/React.createElement(Glass, {
    pad: 14,
    radius: 18,
    onClick: () => go("pending"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer",
      borderColor: "rgba(217,160,91,.45)",
      background: "rgba(217,160,91,.1)"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "user-round-plus",
    size: 22,
    style: {
      color: "var(--st-pending)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: "var(--ink)"
    }
  }, S.ar(pending), " \u062D\u062C\u0648\u0632\u0627\u062A \u062A\u062D\u062A\u0627\u062C \u062A\u0648\u0632\u064A\u0639"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-3)"
    }
  }, "\u0627\u062E\u062A\u0627\u0631\u064A \u0627\u0644\u0645\u0648\u0638\u0641\u0629 \u062D\u062A\u0649 \u064A\u0628\u064A\u0646 \u0627\u0644\u0645\u0648\u0639\u062F \u0639\u062F\u0647\u0627")), /*#__PURE__*/React.createElement(Help, {
    k: "pending",
    inline: true
  }), /*#__PURE__*/React.createElement(Ic, {
    name: "chevron-left",
    size: 18,
    style: {
      color: "var(--ink-4)"
    }
  })), /*#__PURE__*/React.createElement(Segmented, {
    value: tab,
    onChange: setTab,
    options: [{
      v: "next",
      l: "الجاي"
    }, {
      v: "now",
      l: "بالصالون"
    }, {
      v: "done",
      l: "خلصت"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10
    }
  }, list.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      textAlign: "center",
      padding: 24,
      color: "var(--ink-4)",
      fontSize: 14
    }
  }, "\u0645\u0627\u0643\u0648 \u0645\u0648\u0627\u0639\u064A\u062F \u0647\u0646\u0627."), list.map(b => /*#__PURE__*/React.createElement(ApptCard, {
    key: b.id,
    b: b,
    onClick: () => go("detail", b.id),
    actions: b.status === "pending" ? /*#__PURE__*/React.createElement(Btn, {
      small: true,
      kind: "primary",
      icon: "user-round-plus",
      onClick: e => {
        e.stopPropagation();
        openAssign(b.id);
      }
    }, "\u062A\u0639\u064A\u064A\u0646 \u0645\u0648\u0638\u0641\u0629") : !b.arrived && b.status === "confirmed" ? /*#__PURE__*/React.createElement(Btn, {
      small: true,
      icon: "door-open",
      onClick: e => {
        e.stopPropagation();
        setBookings(bs => bs.map(x => x.id === b.id ? {
          ...x,
          arrived: true
        } : x));
        toast("تم تسجيل وصول " + b.cust);
      }
    }, "\u0648\u0635\u0644\u062A") : null
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120
    }
  }));
}
function QuickBooking({
  onClose,
  onSave
}) {
  const [step, setStep] = uS(1);
  const [src, setSrc] = uS("walkin");
  const [svc, setSvc] = uS(null);
  const [when, setWhen] = uS("now");
  const [slot, setSlot] = uS("11:30");
  const [name, setName] = uS("");
  const [phone, setPhone] = uS("");
  const [pay, setPay] = uS("unpaid");
  const [cat, setCat] = uS("hair");
  const svcObj = S.byId(S.services, svc);
  const qualified = svcObj ? S.employees.filter(e => e.skills.includes(svcObj.cat)) : [];
  const suggestion = when === "now" ? {
    t: "هسه (١٢:٣٠)",
    emp: qualified[0]
  } : null;
  const titles = {
    1: "شنو الخدمة؟",
    2: "شوكت؟",
    3: "منو الزبونة؟"
  };
  return /*#__PURE__*/React.createElement(Sheet, {
    onClose: onClose,
    tall: true,
    title: titles[step]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: -6
    }
  }, [1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: 4,
      borderRadius: 99,
      background: i <= step ? "var(--beige)" : "rgba(245,239,233,.15)"
    }
  }))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-3)"
    }
  }, "\u0645\u0635\u062F\u0631 \u0627\u0644\u062D\u062C\u0632"), /*#__PURE__*/React.createElement(Segmented, {
    value: src,
    onChange: setSrc,
    options: [{
      v: "walkin",
      l: "حضور"
    }, {
      v: "whatsapp",
      l: "واتساب"
    }, {
      v: "phone",
      l: "اتصال"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      overflowX: "auto",
      paddingBottom: 2
    }
  }, S.categories.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => setCat(c.id),
    style: {
      all: "unset",
      cursor: "pointer",
      height: 36,
      padding: "0 14px",
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 600,
      whiteSpace: "nowrap",
      color: cat === c.id ? "#0B0A0A" : "var(--ink-2)",
      background: cat === c.id ? "var(--ink)" : "rgba(245,239,233,.08)",
      border: "1px solid " + (cat === c.id ? "var(--ink)" : "var(--glass-border)")
    }
  }, c.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8
    }
  }, S.services.filter(x => x.cat === cat).map(x => /*#__PURE__*/React.createElement("button", {
    key: x.id,
    onClick: () => {
      setSvc(x.id);
      setStep(2);
    },
    style: {
      all: "unset",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
      padding: "12px 14px",
      borderRadius: 16,
      border: "1px solid " + (svc === x.id ? "var(--beige)" : "var(--glass-border)"),
      background: "rgba(11,10,10,.35)"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: "var(--ink)"
    }
  }, x.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)"
    }
  }, S.ar(x.dur), " \u062F\u0642\u064A\u0642\u0629 \xB7 ", S.iqd(x.price))), /*#__PURE__*/React.createElement(Ic, {
    name: "chevron-left",
    size: 18,
    style: {
      color: "var(--ink-4)"
    }
  }))))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Segmented, {
    value: when,
    onChange: setWhen,
    options: [{
      v: "now",
      l: "هسه"
    }, {
      v: "later",
      l: "وقت ثاني"
    }]
  }), when === "now" ? /*#__PURE__*/React.createElement(Glass, {
    pad: 14,
    radius: 16,
    style: {
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0623\u0642\u0631\u0628 \u0645\u0648\u0639\u062F \u0645\u062A\u0627\u062D"), suggestion.emp ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Alexandria,sans-serif",
      fontWeight: 700,
      fontSize: 22,
      color: "var(--ink)"
    }
  }, suggestion.t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 13,
      color: "var(--ink-3)"
    }
  }, qualified.length === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "\u062A\u0646\u062D\u062C\u0632 \u0645\u0628\u0627\u0634\u0631\u0629 \u0639\u0646\u062F"), /*#__PURE__*/React.createElement(EmpChip, {
    id: suggestion.emp.id,
    size: "sm"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, S.ar(qualified.length), " \u0645\u0648\u0638\u0641\u0627\u062A \u0645\u062A\u0641\u0631\u063A\u0627\u062A \u2014 \u064A\u0635\u064A\u0631"), /*#__PURE__*/React.createElement(StatusPill, {
    status: "pending"
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--st-cancelled)",
      fontSize: 14
    }
  }, "\u0645\u0627\u0643\u0648 \u0645\u0648\u0638\u0641\u0629 \u0645\u062A\u0641\u0631\u063A\u0629 \u0647\u0633\u0647 \u0644\u0647\u0627\u0644\u062E\u062F\u0645\u0629. \u0627\u062E\u062A\u0627\u0631\u064A \u0648\u0642\u062A \u062B\u0627\u0646\u064A."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Help, {
    k: "capacity",
    inline: true
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,minmax(0,1fr))",
      gap: 5
    }
  }, ["الخميس", "الجمعة", "السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء"].map((d, i) => /*#__PURE__*/React.createElement("button", {
    key: d,
    style: {
      all: "unset",
      cursor: "pointer",
      textAlign: "center",
      padding: "8px 0",
      borderRadius: 12,
      background: i === 0 ? "var(--ink)" : "rgba(11,10,10,.35)",
      color: i === 0 ? "#0B0A0A" : "var(--ink)",
      border: "1px solid " + (i === 0 ? "var(--ink)" : "var(--glass-border)")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      opacity: .8,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Alexandria,sans-serif",
      fontWeight: 600,
      fontSize: 15
    }
  }, S.ar(12 + i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      flexWrap: "wrap"
    }
  }, S.slots.filter((_, i) => i % 2 === 0).map(t => {
    const taken = ["10:00", "1:00", "4:00"].includes(t);
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      disabled: taken,
      onClick: () => setSlot(t),
      style: {
        all: "unset",
        cursor: taken ? "not-allowed" : "pointer",
        height: 38,
        padding: "0 13px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 500,
        color: slot === t ? "#0B0A0A" : "var(--ink)",
        background: slot === t ? "var(--ink)" : "rgba(11,10,10,.35)",
        border: "1px solid " + (slot === t ? "var(--ink)" : "var(--glass-border)"),
        opacity: taken ? .35 : 1,
        textDecoration: taken ? "line-through" : "none"
      }
    }, S.timeAr(t));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "light",
    full: true,
    onClick: () => setStep(3),
    disabled: when === "now" && !suggestion.emp
  }, "\u0627\u0644\u062A\u0627\u0644\u064A"), /*#__PURE__*/React.createElement(Btn, {
    kind: "ghost",
    onClick: () => setStep(1)
  }, "\u0631\u062C\u0648\u0639"))), step === 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "\u0627\u0633\u0645 \u0627\u0644\u0632\u0628\u0648\u0646\u0629"
  }, /*#__PURE__*/React.createElement(Input, {
    autoFocus: true,
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "\u0645\u062B\u0644\u0627\u064B: \u0647\u062F\u0649"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)"
  }, /*#__PURE__*/React.createElement(Input, {
    value: phone,
    onChange: e => setPhone(e.target.value),
    dir: "ltr",
    type: "tel",
    placeholder: "07xx xxx xxxx",
    style: {
      textAlign: "left"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-2)"
    }
  }, "\u0627\u0644\u062F\u0641\u0639"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, [["cash", "نقد"], ["wayl", "Wayl"], ["unpaid", "بعدين"], ["free", "مجاني"]].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setPay(v),
    style: {
      all: "unset",
      cursor: "pointer",
      height: 36,
      padding: "0 14px",
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 600,
      color: pay === v ? "#0B0A0A" : "var(--ink-2)",
      background: pay === v ? "var(--ink)" : "rgba(245,239,233,.08)",
      border: "1px solid " + (pay === v ? "var(--ink)" : "var(--glass-border)")
    }
  }, l)))), /*#__PURE__*/React.createElement(Glass, {
    pad: 12,
    radius: 14,
    style: {
      fontSize: 13,
      color: "var(--ink-3)",
      display: "grid",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u062E\u062F\u0645\u0629"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink)"
    }
  }, svcObj && svcObj.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0648\u0642\u062A"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink)"
    }
  }, when === "now" ? "هسه" : S.timeAr(slot))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0645\u0635\u062F\u0631"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink)"
    }
  }, {
    walkin: "حضور",
    whatsapp: "واتساب",
    phone: "اتصال"
  }[src]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "primary",
    full: true,
    disabled: !name.trim(),
    onClick: () => onSave({
      id: "B" + Math.floor(Math.random() * 900 + 200),
      t: when === "now" ? "12:30" : slot,
      cust: name.trim(),
      phone,
      svc,
      emp: qualified.length === 1 ? qualified[0].id : null,
      status: qualified.length === 1 ? "confirmed" : "pending",
      pay: pay === "unpaid" ? "unpaid" : pay === "wayl" ? "deposit" : pay,
      src: src === "phone" ? "whatsapp" : src,
      arrived: when === "now"
    }, src === "whatsapp")
  }, "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u062C\u0632"), /*#__PURE__*/React.createElement(Btn, {
    kind: "ghost",
    onClick: () => setStep(2)
  }, "\u0631\u062C\u0648\u0639")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: "var(--ink-4)"
    }
  }, "\u062A\u06AF\u062F\u0631\u064A\u0646 \u062A\u0643\u0645\u0644\u064A\u0646 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0632\u0628\u0648\u0646\u0629 \u0628\u0639\u062F\u064A\u0646.")));
}
function AssignSheet({
  b,
  onClose,
  onAssign
}) {
  const svc = S.byId(S.services, b.svc);
  const q = S.employees.filter(e => e.skills.includes(svc.cat));
  return /*#__PURE__*/React.createElement(Sheet, {
    onClose: onClose,
    title: "\u062A\u0639\u064A\u064A\u0646 \u0645\u0648\u0638\u0641\u0629"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 14,
      color: "var(--ink-3)"
    }
  }, /*#__PURE__*/React.createElement("span", null, b.cust, " \xB7 ", svc.name), /*#__PURE__*/React.createElement("span", null, S.timeAr(b.t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8
    }
  }, q.map(e => {
    const busy = e.id === "E2";
    return /*#__PURE__*/React.createElement("button", {
      key: e.id,
      disabled: busy,
      onClick: () => onAssign(e.id),
      style: {
        all: "unset",
        cursor: busy ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 14px",
        borderRadius: 16,
        border: "1px solid var(--glass-border)",
        background: "rgba(11,10,10,.35)",
        opacity: busy ? .45 : 1
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: e.name,
      color: e.hex,
      size: 38
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 15,
        color: "var(--ink)"
      }
    }, e.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: busy ? "var(--st-progress)" : "var(--st-confirmed)"
      }
    }, busy ? "مشغولة بهالوقت" : "متفرغة")), /*#__PURE__*/React.createElement(Ic, {
      name: "chevron-left",
      size: 18,
      style: {
        color: "var(--ink-4)"
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12.5,
      color: "var(--ink-4)"
    }
  }, /*#__PURE__*/React.createElement(Help, {
    k: "pending",
    inline: true
  }), "\u062A\u0638\u0647\u0631 \u0628\u0633 \u0627\u0644\u0645\u0648\u0638\u0641\u0627\u062A \u0627\u0644\u0644\u064A \u064A\u0639\u0631\u0641\u0646 \u0647\u0627\u0644\u062E\u062F\u0645\u0629."));
}
function DetailScreen({
  b,
  back,
  setBookings,
  openAssign,
  toast
}) {
  const svc = S.byId(S.services, b.svc);
  const upd = patch => setBookings(bs => bs.map(x => x.id === b.id ? {
    ...x,
    ...patch
  } : x));
  const wa = "https://wa.me/964" + (b.phone || "").replace(/^0/, "") + "?text=" + encodeURIComponent(`هلا حبيبتي، تأكد حجزج ويانا.\n\nالخدمة: ${svc.name}\nالموعد: الخميس، الساعة ${S.timeAr(b.t)}\nالعربون: ${S.iqd(svc.deposit)}\n\nننتظرج بالموعد.`);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 0 0"
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    name: "arrow-right",
    label: "\u0631\u062C\u0648\u0639",
    onClick: back
  }), /*#__PURE__*/React.createElement(Eyebrow, null, "\u062D\u062C\u0632 ", b.id)), /*#__PURE__*/React.createElement(ApptCard, {
    b: b
  }), /*#__PURE__*/React.createElement(Glass, {
    pad: 14,
    radius: 18,
    style: {
      display: "grid",
      gap: 10,
      fontSize: 14
    }
  }, [["الزبونة", b.cust], ["الموبايل", /*#__PURE__*/React.createElement("span", {
    dir: "ltr"
  }, b.phone || "—")], ["الخدمة", `${svc.name} · ${S.ar(svc.dur)} دقيقة`], ["السعر", S.iqd(svc.price)], ["العربون", svc.deposit ? S.iqd(svc.deposit) : "بدون"], ["المتبقي", S.iqd(svc.price - (b.pay === "deposit" ? svc.deposit : b.pay === "paid" || b.pay === "cash" ? svc.price : 0))], ["المصدر", S.SRC[b.src]]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-3)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink)",
      fontWeight: 500,
      textAlign: "left"
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8
    }
  }, b.status === "pending" && /*#__PURE__*/React.createElement(Btn, {
    kind: "primary",
    full: true,
    icon: "user-round-plus",
    onClick: () => openAssign(b.id)
  }, "\u062A\u0639\u064A\u064A\u0646 \u0645\u0648\u0638\u0641\u0629"), b.status === "confirmed" && !b.arrived && /*#__PURE__*/React.createElement(Btn, {
    kind: "light",
    full: true,
    icon: "door-open",
    onClick: () => {
      upd({
        arrived: true
      });
      toast("تم تسجيل وصول " + b.cust);
    }
  }, "\u0648\u0635\u0644\u062A"), b.status === "confirmed" && b.arrived && /*#__PURE__*/React.createElement(Btn, {
    kind: "light",
    full: true,
    icon: "play",
    onClick: () => {
      upd({
        status: "progress"
      });
      toast("بدأت الخدمة");
    }
  }, "\u0628\u062F\u0621 \u0627\u0644\u062E\u062F\u0645\u0629"), b.status === "progress" && /*#__PURE__*/React.createElement(Btn, {
    kind: "light",
    full: true,
    icon: "check",
    onClick: () => {
      upd({
        status: "done"
      });
      toast("اكتملت الخدمة");
    }
  }, "\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062E\u062F\u0645\u0629"), b.pay === "unpaid" && b.status !== "cancelled" && /*#__PURE__*/React.createElement(Btn, {
    full: true,
    icon: "banknote",
    onClick: () => {
      upd({
        pay: "cash"
      });
      toast("تم تسجيل الدفع نقداً");
    }
  }, "\u062A\u0633\u062C\u064A\u0644 \u062F\u0641\u0639 \u0646\u0642\u062F\u064A"), /*#__PURE__*/React.createElement("a", {
    href: wa,
    target: "_blank",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    full: true,
    icon: "message-circle"
  }, "\u0625\u0631\u0633\u0627\u0644 \u062A\u0623\u0643\u064A\u062F \u0648\u0627\u062A\u0633\u0627\u0628")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    full: true,
    icon: "calendar-clock",
    small: true
  }, "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0645\u0648\u0639\u062F"), b.status !== "cancelled" && b.status !== "done" && /*#__PURE__*/React.createElement(Btn, {
    full: true,
    kind: "danger",
    small: true,
    icon: "x",
    onClick: () => {
      upd({
        status: "cancelled"
      });
      toast("تم إلغاء الحجز", "cancelled");
      back();
    }
  }, "\u0625\u0644\u063A\u0627\u0621"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120
    }
  }));
}
function BookingsScreen({
  bookings,
  go,
  openAssign
}) {
  const [view, setView] = uS("list");
  const [day, setDay] = uS(0);
  const rows = S.slots;
  const toMin = t => {
    const [h, m] = t.split(":").map(Number);
    return (h < 10 ? h + 12 : h) * 60 + m;
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Header, {
    title: "\u0627\u0644\u062D\u062C\u0648\u0632\u0627\u062A",
    right: /*#__PURE__*/React.createElement(IconBtn, {
      name: "filter",
      label: "\u062A\u0635\u0641\u064A\u0629"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      overflowX: "auto",
      paddingBottom: 2
    }
  }, ["الخميس ١٢", "الجمعة ١٣", "السبت ١٤", "الأحد ١٥", "الاثنين ١٦"].map((d, i) => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => setDay(i),
    style: {
      all: "unset",
      cursor: "pointer",
      height: 38,
      padding: "0 14px",
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 600,
      whiteSpace: "nowrap",
      color: day === i ? "#0B0A0A" : "var(--ink-2)",
      background: day === i ? "var(--ink)" : "rgba(245,239,233,.08)",
      border: "1px solid " + (day === i ? "var(--ink)" : "var(--glass-border)")
    }
  }, d))), /*#__PURE__*/React.createElement(Segmented, {
    value: view,
    onChange: setView,
    options: [{
      v: "list",
      l: "قائمة"
    }, {
      v: "cal",
      l: "جدول الموظفات"
    }]
  }), view === "list" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10
    }
  }, (day === 0 ? bookings : []).map(b => /*#__PURE__*/React.createElement(ApptCard, {
    key: b.id,
    b: b,
    compact: true,
    onClick: () => go("detail", b.id)
  })), day !== 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      textAlign: "center",
      padding: 32,
      color: "var(--ink-4)",
      fontSize: 14
    }
  }, "\u0645\u0627\u0643\u0648 \u062D\u062C\u0648\u0632\u0627\u062A \u0628\u0647\u0627\u0644\u064A\u0648\u0645 \u0628\u0639\u062F.")) : /*#__PURE__*/React.createElement(Glass, {
    pad: 0,
    radius: 18,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "52px repeat(4,1fr)",
      borderBottom: "1px solid var(--glass-border)",
      background: "rgba(11,10,10,.3)"
    }
  }, /*#__PURE__*/React.createElement("span", null), S.employees.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    style: {
      display: "grid",
      justifyItems: "center",
      gap: 3,
      padding: "8px 0"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: e.name,
    color: e.hex,
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink)"
    }
  }, e.name)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "52px repeat(4,1fr)"
    }
  }, rows.map(t => /*#__PURE__*/React.createElement(React.Fragment, {
    key: t
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: t.endsWith(":00") ? "var(--ink-4)" : "transparent",
      padding: "4px 8px",
      height: 36,
      boxSizing: "border-box",
      fontFamily: "Alexandria,sans-serif",
      borderBottom: "1px solid rgba(245,239,233,.06)"
    }
  }, S.timeAr(t)), S.employees.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    style: {
      height: 36,
      borderBottom: "1px solid rgba(245,239,233,.06)"
    }
  })))), (day === 0 ? bookings : []).filter(x => x.emp && x.status !== "cancelled").map(b => {
    const e = S.byId(S.employees, b.emp);
    const svc = S.byId(S.services, b.svc);
    const col = S.employees.indexOf(e);
    const top = (toMin(b.t) - toMin(rows[0])) / 30 * 36;
    const h = Math.max(30, svc.dur / 30 * 36 - 4);
    return /*#__PURE__*/React.createElement("button", {
      key: b.id,
      onClick: () => go("detail", b.id),
      style: {
        all: "unset",
        cursor: "pointer",
        position: "absolute",
        top: top + 2,
        insetInlineStart: `calc(52px + (100% - 52px) / 4 * ${col} + 3px)`,
        width: "calc((100% - 52px) / 4 - 6px)",
        height: h,
        boxSizing: "border-box",
        padding: "4px 6px",
        borderRadius: 8,
        background: `color-mix(in srgb,${e.hex} 24%,#211B1B)`,
        borderInlineStart: `3px solid ${e.hex}`,
        fontSize: 10.5,
        color: "var(--ink)",
        lineHeight: 1.3,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, b.cust), /*#__PURE__*/React.createElement("div", {
      style: {
        color: `var(--st-${b.status})`,
        fontSize: 9.5,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, S.STATUS[b.status].label));
  })), bookings.filter(b => b.status === "pending").length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12,
      color: "var(--st-pending)",
      background: "rgba(217,160,91,.08)"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "info",
    size: 14
  }), S.ar(bookings.filter(b => b.status === "pending").length), " \u062D\u062C\u0648\u0632\u0627\u062A \u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u0648\u0632\u064A\u0639 \u0645\u0627 \u062A\u0638\u0647\u0631 \u0628\u0627\u0644\u062C\u062F\u0648\u0644 \u2014 ", /*#__PURE__*/React.createElement("button", {
    onClick: () => go("pending"),
    style: {
      all: "unset",
      cursor: "pointer",
      textDecoration: "underline"
    }
  }, "\u0648\u0632\u0639\u064A\u0647\u0627"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120
    }
  }));
}
function PendingScreen({
  bookings,
  back,
  openAssign
}) {
  const list = bookings.filter(b => b.status === "pending");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 0 0"
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    name: "arrow-right",
    label: "\u0631\u062C\u0648\u0639",
    onClick: back
  }), /*#__PURE__*/React.createElement(H2, {
    style: {
      fontSize: 20
    }
  }, "\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u0648\u0632\u064A\u0639"), /*#__PURE__*/React.createElement(Help, {
    k: "pending"
  })), list.length === 0 && /*#__PURE__*/React.createElement(Glass, {
    style: {
      textAlign: "center",
      color: "var(--ink-3)",
      fontSize: 14,
      padding: 28
    }
  }, "\u0643\u0644\u0634\u064A \u0645\u0648\u0632\u0639. \u0639\u0627\u0641\u064A\u0629!"), list.map(b => /*#__PURE__*/React.createElement(ApptCard, {
    key: b.id,
    b: b,
    actions: /*#__PURE__*/React.createElement(Btn, {
      small: true,
      kind: "primary",
      icon: "user-round-plus",
      onClick: () => openAssign(b.id)
    }, "\u062A\u0639\u064A\u064A\u0646 \u0645\u0648\u0638\u0641\u0629")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120
    }
  }));
}
function StaffScreen({
  bookings
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Header, {
    title: "\u0627\u0644\u0645\u0648\u0638\u0641\u0627\u062A",
    right: /*#__PURE__*/React.createElement(IconBtn, {
      name: "user-round-plus",
      label: "\u0625\u0636\u0627\u0641\u0629"
    })
  }), S.employees.map(e => {
    const mine = bookings.filter(b => b.emp === e.id && b.status !== "cancelled");
    const busy = mine.some(b => b.status === "progress");
    return /*#__PURE__*/React.createElement(Glass, {
      key: e.id,
      pad: 14,
      radius: 18,
      style: {
        display: "grid",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: e.name,
      color: e.hex,
      size: 44
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 16,
        color: "var(--ink)"
      }
    }, e.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--ink-3)"
      }
    }, e.skills.map(k => S.categories.find(c => c.id === k).name).join(" · "))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: busy ? "var(--st-progress)" : "var(--st-confirmed)"
      }
    }, busy ? "مشغولة" : "متفرغة")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12.5,
        color: "var(--ink-3)",
        paddingTop: 8,
        borderTop: "1px solid rgba(245,239,233,.08)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u062F\u0648\u0627\u0645 \u0661\u0660:\u0660\u0660 \u0635 \u2013 \u0668:\u0660\u0660 \u0645 \xB7 \u0627\u0633\u062A\u0631\u0627\u062D\u0629 \u0662:\u0660\u0660 \u0645"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink)"
      }
    }, S.ar(mine.length), " \u0645\u0648\u0627\u0639\u064A\u062F")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Btn, {
      small: true,
      full: true,
      icon: "calendar-days"
    }, "\u0627\u0644\u062F\u0648\u0627\u0645"), /*#__PURE__*/React.createElement(Btn, {
      small: true,
      full: true,
      icon: "key-round"
    }, "\u0631\u0645\u0632 \u0627\u0644\u062F\u062E\u0648\u0644")));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120
    }
  }));
}
function MoreScreen({
  go
}) {
  const items = [["services", "scissors", "الخدمات", "الأسعار والمدد والعربون"], ["payments", "banknote", "المدفوعات", "العرابين والمتبقي"], ["reports", "chart-no-axes-column", "التقارير", "أداء الصالون"], ["settings", "settings", "الإعدادات", "الدوام، الصلاحيات، Wayl"], ["help", "circle-help", "المساعدة", "شروحات وأمثلة"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Header, {
    title: "\u0627\u0644\u0645\u0632\u064A\u062F"
  }), /*#__PURE__*/React.createElement(Glass, {
    pad: 0,
    radius: 20,
    style: {
      overflow: "hidden"
    }
  }, items.map(([id, ic, t, d], i) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => go(id),
    style: {
      all: "unset",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 14,
      width: "100%",
      boxSizing: "border-box",
      padding: "14px 16px",
      borderTop: i ? "1px solid rgba(245,239,233,.08)" : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: "rgba(245,239,233,.08)",
      display: "grid",
      placeItems: "center",
      color: "var(--ink-2)"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: ic,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: "var(--ink)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)"
    }
  }, d)), /*#__PURE__*/React.createElement(Ic, {
    name: "chevron-left",
    size: 18,
    style: {
      color: "var(--ink-4)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120
    }
  }));
}
function ReportsScreen({
  bookings,
  back
}) {
  const done = bookings.filter(b => b.status === "done").length,
    canc = bookings.filter(b => b.status === "cancelled").length;
  const bySrc = ["walkin", "whatsapp", "web"].map(k => [S.SRC[k], bookings.filter(b => b.src === k).length]);
  const rev = bookings.filter(b => b.status !== "cancelled").reduce((a, b) => a + S.byId(S.services, b.svc).price, 0);
  const dep = bookings.filter(b => b.pay === "deposit").reduce((a, b) => a + S.byId(S.services, b.svc).deposit, 0);
  const max = Math.max(...bySrc.map(x => x[1]), 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 0 0"
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    name: "arrow-right",
    label: "\u0631\u062C\u0648\u0639",
    onClick: back
  }), /*#__PURE__*/React.createElement(H2, {
    style: {
      fontSize: 20
    }
  }, "\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631 \xB7 \u0627\u0644\u064A\u0648\u0645")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: bookings.length,
    label: "\u062D\u062C\u0648\u0632\u0627\u062A"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: done,
    label: "\u0645\u0643\u062A\u0645\u0644\u0629",
    tone: "done"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: canc,
    label: "\u0645\u0644\u063A\u064A\u0629",
    tone: "cancelled"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: bookings.filter(b => b.pay === "unpaid").length,
    label: "\u0628\u062F\u0648\u0646 \u062F\u0641\u0639",
    tone: "pending"
  })), /*#__PURE__*/React.createElement(Glass, {
    pad: 14,
    radius: 18,
    style: {
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0627\u0644\u0625\u064A\u0631\u0627\u062F \u0627\u0644\u0645\u062A\u0648\u0642\u0639"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Alexandria,sans-serif",
      fontWeight: 700,
      fontSize: 28,
      color: "var(--ink)"
    }
  }, S.iqd(rev)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-3)"
    }
  }, "\u0645\u0646\u0647\u0627 \u0639\u0631\u0627\u0628\u064A\u0646 \u0645\u062F\u0641\u0648\u0639\u0629 ", S.iqd(dep), " \xB7 \u0645\u062A\u0628\u0642\u064A ", S.iqd(rev - dep))), /*#__PURE__*/React.createElement(Glass, {
    pad: 14,
    radius: 18,
    style: {
      display: "grid",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0645\u0635\u062F\u0631 \u0627\u0644\u062D\u062C\u0648\u0632\u0627\u062A"), bySrc.map(([l, n]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "grid",
      gridTemplateColumns: "64px 1fr 28px",
      alignItems: "center",
      gap: 10,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-2)"
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 10,
      borderRadius: 99,
      background: "rgba(245,239,233,.08)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: "100%",
      width: n / max * 100 + "%",
      background: "var(--beige)",
      borderRadius: 99
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink)",
      textAlign: "left"
    }
  }, S.ar(n))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120
    }
  }));
}
function StubScreen({
  title,
  back,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 0 0"
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    name: "arrow-right",
    label: "\u0631\u062C\u0648\u0639",
    onClick: back
  }), /*#__PURE__*/React.createElement(H2, {
    style: {
      fontSize: 20
    }
  }, title)), /*#__PURE__*/React.createElement(Glass, {
    style: {
      color: "var(--ink-3)",
      fontSize: 14,
      lineHeight: 1.8
    }
  }, note));
}
Object.assign(window, {
  TodayScreen,
  QuickBooking,
  AssignSheet,
  DetailScreen,
  BookingsScreen,
  PendingScreen,
  StaffScreen,
  MoreScreen,
  ReportsScreen,
  StubScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/receptionist/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shared/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      "data-om-starter": "ios-frame",
      style: {
        width,
        height,
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        background: dark ? '#000' : '#F2F2F7',
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
        fontFamily: '-apple-system, system-ui, sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 11,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 126,
        height: 37,
        borderRadius: 24,
        background: '#000',
        zIndex: 50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(IOSStatusBar, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
      title: title,
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 8,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 139,
        height: 5,
        borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
      }
    })))
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shared/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shared/salon-data.js
try { (() => {
// Shared sample data for the three prototypes. Mirrors the Google Sheets tabs (see docs/architecture.md). Sample only — never ship as production data.
window.SALON = (() => {
  const employees = [{
    id: "E1",
    name: "سارة",
    color: "var(--emp-sara)",
    hex: "#D58B91",
    role: "employee",
    skills: ["hair", "brows"]
  }, {
    id: "E2",
    name: "نور",
    color: "var(--emp-noor)",
    hex: "#C65A32",
    role: "employee",
    skills: ["nails", "makeup"]
  }, {
    id: "E3",
    name: "مريم",
    color: "var(--emp-mariam)",
    hex: "#8FAE8B",
    role: "employee",
    skills: ["nails", "brows"]
  }, {
    id: "E4",
    name: "زينب",
    color: "var(--emp-zainab)",
    hex: "#B49AD6",
    role: "employee",
    skills: ["hair", "makeup", "bridal"]
  }];
  const categories = [{
    id: "hair",
    name: "الشعر"
  }, {
    id: "nails",
    name: "الأظافر"
  }, {
    id: "brows",
    name: "الحواجب"
  }, {
    id: "makeup",
    name: "المكياج"
  }, {
    id: "bridal",
    name: "العرايس"
  }];
  const services = [{
    id: "S1",
    cat: "hair",
    name: "قص وتصفيف",
    desc: "قص مع غسيل واستشوار.",
    dur: 45,
    price: 25000,
    deposit: 0
  }, {
    id: "S2",
    cat: "hair",
    name: "صبغ شعر",
    desc: "صبغة كاملة مع غسيل.",
    dur: 120,
    price: 60000,
    deposit: 20000
  }, {
    id: "S3",
    cat: "hair",
    name: "تسريحة سهرة",
    desc: "رفع أو ويفي مع تثبيت.",
    dur: 60,
    price: 40000,
    deposit: 10000
  }, {
    id: "S4",
    cat: "nails",
    name: "مانيكير",
    desc: "تنظيف وطلاء.",
    dur: 40,
    price: 15000,
    deposit: 0
  }, {
    id: "S5",
    cat: "nails",
    name: "تركيب أظافر",
    desc: "أكريليك أو جل.",
    dur: 90,
    price: 45000,
    deposit: 15000
  }, {
    id: "S6",
    cat: "brows",
    name: "ترتيب حواجب",
    desc: "تحديد وتشذيب.",
    dur: 20,
    price: 10000,
    deposit: 0
  }, {
    id: "S7",
    cat: "makeup",
    name: "مكياج سهرة",
    desc: "مكياج كامل يدوم طول الليل.",
    dur: 60,
    price: 50000,
    deposit: 15000
  }, {
    id: "S8",
    cat: "bridal",
    name: "مكياج عروس",
    desc: "جلسة كاملة مع تجربة مسبقة.",
    dur: 180,
    price: 250000,
    deposit: 50000
  }];
  const STATUS = {
    confirmed: {
      label: "مؤكّد",
      v: "confirmed"
    },
    pending: {
      label: "بانتظار التوزيع",
      v: "pending"
    },
    progress: {
      label: "قيد الخدمة",
      v: "progress"
    },
    done: {
      label: "مكتمل",
      v: "done"
    },
    cancelled: {
      label: "ملغي",
      v: "cancelled"
    },
    unpaid: {
      label: "بانتظار الدفع",
      v: "unpaid"
    }
  };
  const PAY = {
    paid: "مدفوع",
    deposit: "عربون مدفوع",
    unpaid: "غير مدفوع",
    cash: "نقد",
    free: "مجاني"
  };
  const SRC = {
    walkin: "حضور",
    whatsapp: "واتساب",
    web: "الموقع"
  };
  const today = [{
    id: "B101",
    t: "10:00",
    cust: "هدى",
    phone: "07701234567",
    svc: "S1",
    emp: "E1",
    status: "done",
    pay: "cash",
    src: "walkin"
  }, {
    id: "B102",
    t: "10:30",
    cust: "رنا",
    phone: "07711234567",
    svc: "S4",
    emp: "E3",
    status: "progress",
    pay: "unpaid",
    src: "walkin",
    arrived: true
  }, {
    id: "B103",
    t: "11:00",
    cust: "مريم ك.",
    phone: "07721234567",
    svc: "S5",
    emp: null,
    status: "pending",
    pay: "deposit",
    src: "web"
  }, {
    id: "B104",
    t: "11:30",
    cust: "شهد",
    phone: "07731234567",
    svc: "S2",
    emp: "E4",
    status: "confirmed",
    pay: "deposit",
    src: "whatsapp"
  }, {
    id: "B105",
    t: "12:00",
    cust: "دعاء",
    phone: "07741234567",
    svc: "S6",
    emp: "E1",
    status: "confirmed",
    pay: "unpaid",
    src: "walkin",
    arrived: true
  }, {
    id: "B106",
    t: "1:00",
    cust: "آية",
    phone: "07751234567",
    svc: "S7",
    emp: null,
    status: "pending",
    pay: "deposit",
    src: "web"
  }, {
    id: "B107",
    t: "2:30",
    cust: "زهراء",
    phone: "07761234567",
    svc: "S8",
    emp: "E4",
    status: "confirmed",
    pay: "deposit",
    src: "web"
  }, {
    id: "B108",
    t: "4:00",
    cust: "نبأ",
    phone: "07771234567",
    svc: "S3",
    emp: "E1",
    status: "unpaid",
    pay: "unpaid",
    src: "web"
  }, {
    id: "B109",
    t: "5:30",
    cust: "سجى",
    phone: "07781234567",
    svc: "S4",
    emp: "E2",
    status: "cancelled",
    pay: "unpaid",
    src: "whatsapp"
  }];
  const slots = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30", "6:00", "6:30", "7:00"];
  const byId = (arr, id) => arr.find(x => x.id === id);
  const iqd = n => n.toLocaleString("ar-EG") + " د.ع";
  const ar = n => Number(n).toLocaleString("ar-EG");
  const timeAr = t => {
    const [h, m] = t.split(":");
    const hh = +h;
    return ar(hh) + ":" + m.replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]) + (hh >= 10 && hh <= 11 ? " ص" : " م");
  };
  const help = {
    pending: {
      q: "شنو يعني بانتظار التوزيع؟",
      a: "الزبونة حجزت موعد، بس بعد ما حددنا الموظفة.\n\nمثال: مريم حجزت أظافر الساعة ١٢، وسارة ونور متفرغات.\n\nاختاري وحدة منهن حتى يتحدد الموعد إلها."
    },
    walkin: {
      q: "شلون أضيف زبونة بدون موعد؟",
      a: "إذا إجت زبونة للصالون بدون حجز، اختاري الخدمة واضغطي «هسه».\n\nإذا أكو موظفة متفرغة، ينضاف الحجز مباشرة."
    },
    capacity: {
      q: "ليش ما يطلع الوقت متوفر؟",
      a: "النظام يحسب كل الموظفات اللي يعرفن هالخدمة ودوامهن واستراحاتهن والحجوزات الموجودة — حتى اللي بعد ما توزعت.\n\nإذا ما أكو وحدة تگدر تكمل الخدمة كاملة بهالوقت، ما يطلع متوفر."
    },
    deposit: {
      q: "شنو العربون؟",
      a: "مبلغ تدفعه الزبونة مقدماً حتى يثبت الحجز. ينحسب من سعر الخدمة، والباقي تدفعه بالصالون."
    },
    code: {
      q: "وين ألگي رمز الدخول؟",
      a: "الرمز تعطيج إياه مسؤولة الاستقبال. إذا ضاع أو انكشف، تگدر تلغيه وتطلع رمز جديد."
    }
  };
  return {
    employees,
    categories,
    services,
    STATUS,
    PAY,
    SRC,
    today,
    slots,
    byId,
    iqd,
    ar,
    timeAr,
    help
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shared/salon-data.js", error: String((e && e.message) || e) }); }

// ui_kits/shared/staff-ui.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Shared staff-dashboard primitives (receptionist + employee). Dark warm theme via tokens/staff.css (.theme-staff).
const {
  useState,
  useEffect
} = React;
const DS = window.SalonAlloushDesignSystem_7d8ad7 || {};
const Ic = ({
  name,
  size = 18,
  style
}) => DS.Icon ? /*#__PURE__*/React.createElement(DS.Icon, {
  name: name,
  size: size,
  style: style
}) : /*#__PURE__*/React.createElement("span", {
  style: {
    width: size,
    height: size,
    display: "inline-block"
  }
});
const G = {
  background: "var(--glass)",
  backdropFilter: "var(--blur)",
  WebkitBackdropFilter: "var(--blur)",
  border: "1px solid var(--glass-border)",
  boxShadow: "inset 0 1px 0 var(--glass-highlight)"
};
function Glass({
  children,
  style,
  onClick,
  pad = 16,
  radius = "var(--r-lg)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      ...G,
      borderRadius: radius,
      padding: pad,
      ...style
    }
  }, children);
}
function StatusPill({
  status
}) {
  const S = window.SALON.STATUS[status] || {
    label: status
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 24,
      padding: "0 9px",
      borderRadius: 999,
      fontSize: 11.5,
      fontWeight: 600,
      color: `var(--st-${status})`,
      background: `var(--st-${status}-bg)`,
      border: `1px solid color-mix(in srgb,var(--st-${status}) 40%,transparent)`,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 99,
      background: "currentColor"
    }
  }), S.label);
}
function EmpChip({
  id,
  size = "md"
}) {
  const e = window.SALON.byId(window.SALON.employees, id);
  if (!e) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      color: "var(--st-pending)",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "user-round-x",
    size: 14
  }), "\u0628\u062F\u0648\u0646 \u0645\u0648\u0638\u0641\u0629");
  const d = size === "sm" ? 20 : 26;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontSize: size === "sm" ? 12 : 13,
      color: "var(--ink)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: d,
      height: d,
      borderRadius: 99,
      background: e.color,
      color: "#0B0A0A",
      display: "grid",
      placeItems: "center",
      fontSize: d * .5,
      fontWeight: 700,
      fontFamily: "Alexandria,sans-serif"
    }
  }, e.name[0]), e.name);
}
function Btn({
  children,
  kind = "glass",
  onClick,
  icon,
  full,
  small,
  disabled,
  style
}) {
  const [h, setH] = useState(false);
  const base = {
    height: small ? 40 : "var(--tap)",
    padding: small ? "0 14px" : "0 20px",
    borderRadius: 999,
    font: `${small ? 500 : 600} ${small ? 13 : 15}px 'IBM Plex Sans Arabic',sans-serif`,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: full ? "100%" : undefined,
    opacity: disabled ? .45 : 1,
    transition: "background .15s,transform .15s",
    whiteSpace: "nowrap",
    color: "var(--ink)"
  };
  const K = {
    glass: {
      ...G,
      background: h ? "rgba(53,43,43,.75)" : "var(--glass)"
    },
    primary: {
      background: h ? "#D16A42" : "var(--orange)",
      border: "1px solid rgba(245,239,233,.2)",
      boxShadow: "inset 0 1px 0 rgba(245,239,233,.15)"
    },
    ghost: {
      background: h ? "rgba(245,239,233,.08)" : "transparent",
      border: "1px solid transparent",
      color: "var(--ink-2)"
    },
    light: {
      background: h ? "#fff" : "var(--ink)",
      color: "#0B0A0A",
      border: "1px solid transparent"
    },
    danger: {
      background: h ? "rgba(216,107,98,.28)" : "rgba(216,107,98,.18)",
      border: "1px solid rgba(216,107,98,.5)",
      color: "#F2A39C"
    }
  }[kind];
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...base,
      ...K,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(Ic, {
    name: icon,
    size: small ? 16 : 18
  }), children);
}
function IconBtn({
  name,
  label,
  onClick,
  active,
  badge,
  size = 44
}) {
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    onClick: onClick,
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      ...G,
      background: active ? "rgba(245,239,233,.14)" : "var(--glass)",
      color: active ? "var(--ink)" : "var(--ink-2)",
      cursor: "pointer",
      display: "grid",
      placeItems: "center",
      position: "relative",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: name,
    size: 20
  }), badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -2,
      insetInlineEnd: -2,
      minWidth: 18,
      height: 18,
      padding: "0 5px",
      borderRadius: 99,
      background: "var(--orange)",
      color: "#fff",
      fontSize: 11,
      fontWeight: 700,
      display: "grid",
      placeItems: "center"
    }
  }, badge) : null);
}
function Help({
  k,
  inline
}) {
  const [o, setO] = useState(false);
  const h = window.SALON.help[k];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    "aria-label": "\u0645\u0633\u0627\u0639\u062F\u0629",
    onClick: e => {
      e.stopPropagation();
      setO(true);
    },
    style: {
      width: inline ? 22 : 28,
      height: inline ? 22 : 28,
      borderRadius: 99,
      border: "1px solid rgba(232,200,173,.4)",
      background: "transparent",
      color: "var(--ink-2)",
      fontSize: 13,
      cursor: "pointer",
      display: "inline-grid",
      placeItems: "center",
      padding: 0,
      flex: "none"
    }
  }, "\u24D8"), o && /*#__PURE__*/React.createElement(Sheet, {
    onClose: () => setO(false),
    title: h.q
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      whiteSpace: "pre-line",
      fontSize: 15,
      lineHeight: 1.8,
      color: "var(--ink-2)"
    }
  }, h.a), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "light",
    full: true,
    onClick: () => setO(false)
  }, "\u0641\u0647\u0645\u062A"), k === "walkin" && /*#__PURE__*/React.createElement(Btn, {
    full: true,
    onClick: () => setO(false)
  }, "\u062C\u0631\u0651\u0628\u064A \u0645\u062B\u0627\u0644"))));
}
function Sheet({
  children,
  title,
  onClose,
  tall
}) {
  useEffect(() => {
    const k = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 60,
      background: "rgba(11,10,10,.6)",
      backdropFilter: "blur(6px)",
      display: "flex",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    style: {
      width: "100%",
      maxHeight: tall ? "92%" : "80%",
      overflow: "auto",
      borderRadius: "26px 26px 0 0",
      background: "var(--glass-strong)",
      backdropFilter: "blur(24px)",
      border: "1px solid var(--glass-border)",
      borderBottom: 0,
      padding: "14px 18px 30px",
      boxSizing: "border-box",
      display: "grid",
      gap: 14,
      animation: "rise .35s cubic-bezier(.2,.7,.2,1) both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 99,
      background: "rgba(245,239,233,.25)",
      margin: "0 auto"
    }
  }), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "Alexandria,sans-serif",
      fontWeight: 600,
      fontSize: 21,
      lineHeight: 1.25,
      color: "var(--ink)"
    }
  }, title), children));
}
function Toast({
  msg,
  tone = "confirmed"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      right: 14,
      bottom: 104,
      zIndex: 70,
      ...G,
      background: "var(--glass-strong)",
      borderRadius: 16,
      padding: "12px 14px",
      display: "flex",
      gap: 10,
      alignItems: "center",
      fontSize: 14,
      color: "var(--ink)",
      borderInlineStart: `3px solid var(--st-${tone})`,
      animation: "rise .3s cubic-bezier(.2,.7,.2,1) both"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: tone === "cancelled" ? "circle-x" : "circle-check",
    size: 18,
    style: {
      color: `var(--st-${tone})`
    }
  }), msg);
}
function BottomNav({
  items,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "absolute",
      left: 12,
      right: 12,
      bottom: 22,
      zIndex: 50,
      height: 66,
      borderRadius: 999,
      ...G,
      background: "rgba(33,27,27,.78)",
      boxShadow: "0 20px 50px -20px rgba(0,0,0,.9),inset 0 1px 0 var(--glass-highlight)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "0 6px"
    }
  }, items.map(it => {
    const on = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onChange(it.id),
      style: {
        all: "unset",
        cursor: "pointer",
        display: "grid",
        justifyItems: "center",
        gap: 3,
        minWidth: 56,
        height: 52,
        borderRadius: 999,
        padding: "0 8px",
        color: on ? "var(--ink)" : "var(--ink-4)",
        background: on ? "rgba(245,239,233,.1)" : "transparent",
        position: "relative",
        transition: "background .2s"
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      name: it.icon,
      size: 21
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        fontWeight: on ? 600 : 500
      }
    }, it.label), it.badge ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 4,
        insetInlineEnd: 8,
        width: 8,
        height: 8,
        borderRadius: 99,
        background: "var(--st-pending)"
      }
    }) : null);
  }));
}
function Avatar({
  name,
  color,
  size = 34
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 99,
      background: color,
      color: "#0B0A0A",
      display: "grid",
      placeItems: "center",
      fontWeight: 700,
      fontFamily: "Alexandria,sans-serif",
      fontSize: size * .45,
      flex: "none"
    }
  }, name[0]);
}
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      letterSpacing: ".12em",
      color: "var(--ink-3)",
      fontWeight: 500,
      ...style
    }
  }, children);
}
function H2({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "Alexandria,sans-serif",
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.2,
      color: "var(--ink)",
      ...style
    }
  }, children);
}
function Stat({
  n,
  label,
  tone
}) {
  return /*#__PURE__*/React.createElement(Glass, {
    pad: 12,
    radius: 16,
    style: {
      display: "grid",
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Alexandria,sans-serif",
      fontWeight: 700,
      fontSize: 24,
      color: tone ? `var(--st-${tone})` : "var(--ink)"
    }
  }, window.SALON.ar(n)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-3)"
    }
  }, label));
}
function Segmented({
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      padding: 4,
      borderRadius: 999,
      flex: "1 1 auto",
      minWidth: 0,
      ...G
    }
  }, options.map(o => {
    const on = o.v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.v,
      onClick: () => onChange(o.v),
      style: {
        all: "unset",
        flex: 1,
        textAlign: "center",
        height: 38,
        lineHeight: "38px",
        padding: "0 10px",
        whiteSpace: "nowrap",
        borderRadius: 999,
        fontSize: 13.5,
        fontWeight: 600,
        cursor: "pointer",
        color: on ? "#0B0A0A" : "var(--ink-2)",
        background: on ? "var(--ink)" : "transparent",
        transition: "background .2s"
      }
    }, o.l);
  }));
}
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: 6,
      fontSize: 13,
      color: "var(--ink-2)"
    }
  }, label, children);
}
const inputStyle = {
  height: 50,
  padding: "0 16px",
  borderRadius: 14,
  border: "1px solid var(--glass-border)",
  background: "rgba(11,10,10,.4)",
  color: "var(--ink)",
  font: "400 16px 'IBM Plex Sans Arabic',sans-serif",
  outline: "none",
  width: "100%",
  boxSizing: "border-box"
};
function Input(props) {
  return /*#__PURE__*/React.createElement("input", _extends({}, props, {
    style: {
      ...inputStyle,
      ...(props.style || {})
    }
  }));
}

// Appointment card — the core staff object.
function ApptCard({
  b,
  onClick,
  actions,
  compact
}) {
  const S = window.SALON;
  const svc = S.byId(S.services, b.svc);
  const emp = S.byId(S.employees, b.emp);
  return /*#__PURE__*/React.createElement(Glass, {
    onClick: onClick,
    pad: 0,
    radius: 20,
    style: {
      overflow: "hidden",
      cursor: onClick ? "pointer" : "default",
      borderInlineStart: `4px solid ${emp ? emp.hex : "var(--st-pending)"}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: compact ? "12px 14px" : "14px 16px",
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Alexandria,sans-serif",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--ink)"
    }
  }, S.timeAr(b.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-4)",
      fontWeight: 500,
      marginInlineStart: 8
    }
  }, S.ar(svc.dur), " \u062F")), /*#__PURE__*/React.createElement(StatusPill, {
    status: b.status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16,
      color: "var(--ink)"
    }
  }, b.cust, b.arrived && b.status !== "progress" && /*#__PURE__*/React.createElement("span", {
    style: {
      marginInlineStart: 8,
      fontSize: 11,
      color: "var(--st-confirmed)",
      fontWeight: 600,
      whiteSpace: "nowrap",
      display: "inline-block"
    }
  }, "\u2022 \u0648\u0635\u0644\u062A")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-3)"
    }
  }, svc.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-4)",
      whiteSpace: "nowrap"
    }
  }, S.SRC[b.src])), !compact && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 8,
      paddingTop: 8,
      borderTop: "1px solid rgba(245,239,233,.08)"
    }
  }, /*#__PURE__*/React.createElement(EmpChip, {
    id: b.emp,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: b.pay === "unpaid" ? "var(--st-pending)" : "var(--ink-3)",
      display: "inline-flex",
      gap: 5,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: b.pay === "unpaid" ? "circle-alert" : "badge-check",
    size: 14
  }), S.PAY[b.pay])), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, actions)));
}
Object.assign(window, {
  Ic,
  G,
  Glass,
  StatusPill,
  EmpChip,
  Btn,
  IconBtn,
  Help,
  Sheet,
  Toast,
  BottomNav,
  Avatar,
  Eyebrow,
  H2,
  Stat,
  Segmented,
  Field,
  Input,
  inputStyle,
  ApptCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shared/staff-ui.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
