interface ColorPaletteProps {
  colors: string[]
  title?: string
}

export function ColorPalette({ colors, title }: ColorPaletteProps) {
  return (
    <div className="flex flex-col items-center">
      {title && <h4 className="text-sm font-medium mb-3 text-gray-600">{title}</h4>}
      <div className="flex space-x-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-12 h-16 rounded-t-full border-2 border-white shadow-sm"
            style={{ backgroundColor: color }}
            title={`Color ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
