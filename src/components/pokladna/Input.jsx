"use client";

export const Input = ({ value, onChange, type = "text", name, label, placeholder, required = true }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label} {required ? <span>*</span> : ""}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder || label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </div>
  )
}
