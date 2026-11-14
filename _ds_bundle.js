/* @ds-bundle: {"format":4,"namespace":"SalonAlloushDesignSystem_7d8ad7","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"},{"name":"Toast","sourcePath":"components/surfaces/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/surfaces/Tooltip.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"dbf86a1b9c57","components/core/Button.jsx":"5e09f4c2a053","components/core/Icon.jsx":"2cc9b9549364","components/core/IconButton.jsx":"28a58e0a881f","components/core/Tag.jsx":"1c59a4c78c4c","components/core/Wordmark.jsx":"b2b7085a05b6","components/forms/Checkbox.jsx":"8aadc9ab345b","components/forms/Field.jsx":"00e7e44ca997","components/forms/Input.jsx":"53f60f9525a1","components/forms/Radio.jsx":"93aebc41ff87","components/forms/Select.jsx":"5313917efe08","components/forms/Switch.jsx":"71b27b43bc47","components/surfaces/Card.jsx":"b24ee022bbee","components/surfaces/Dialog.jsx":"e4b14645d07d","components/surfaces/Tabs.jsx":"80e81e9a24e0","components/surfaces/Toast.jsx":"32454b5bfaf3","components/surfaces/Tooltip.jsx":"12d2fd45a28c","ui_kits/booking-site/Book.jsx":"27abf8891b9b","ui_kits/booking-site/Home.jsx":"5bea17c32179","ui_kits/booking-site/Location.jsx":"c079be82aeff","ui_kits/booking-site/Services.jsx":"f11cdc9b7fd3","ui_kits/booking-site/Shell.jsx":"347c7ab15f4a","ui_kits/booking-site/data.js":"6ee8c91cbd83","ui_kits/employee/screens.jsx":"12556b283226","ui_kits/receptionist/screens.jsx":"05a18d62bbed","ui_kits/shared/ios-frame.jsx":"24642b887be3","ui_kits/shared/salon-data.js":"066546bdecab","ui_kits/shared/staff-ui.jsx":"02604e5c3356"},"inlinedExternals":[],"unexposedExports":[]} */

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
