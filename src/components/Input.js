
export function Input(inputs) {
  return (
    <label>
      <code>{inputs.children}</code>
      <input
        value={inputs.value}
        type="range"
        min={inputs.min}
        max={inputs.max}
        onChange={(e) => inputs.set(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={inputs.value}
        min={inputs.min}
        max={inputs.max}
        onChange={(e) => inputs.set(parseFloat(e.target.value))}
      />
    </label>
  )
}