export function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function CustomCard({
  title,
  subtitle,
  content,
  image,
  footer,
  className
}) {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden", className)}>
      {image && (
        <div className="w-full h-48 bg-gray-200">
          <img
            src={image}
            alt={title || "Card image"}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        {subtitle && <h4 className="text-md text-gray-600 mb-4">{subtitle}</h4>}
        {content && <p className="text-gray-700">{content}</p>}
      </div>
      {footer && <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">{footer}</div>}
    </div>
  )
}