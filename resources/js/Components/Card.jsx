import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Card = ({
    image = "",
    icon = null,
    title = "",
    subtitle = "",
    children = null,
    className = "",
    headerClassName = "",
    bodyClassName = "",
    footer = null,
    footerClassName = "",
    actions = [],
    ...rest
}) => {
    return (
        <div
            className={clsx(
                "bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105",
                className
            )}
            {...rest}
        >
            {image && (
                <div
                    className="h-48 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            )}

            {(icon || title || subtitle) && (
                <div
                    className={clsx(
                        "px-6 py-4 border-b border-gray-200",
                        headerClassName
                    )}
                >
                    {icon && (
                        <div className="text-3xl text-gray-700 mb-2">
                            {icon}
                        </div>
                    )}
                    {title && (
                        <h2 className="text-lg font-bold text-gray-800">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className="text-sm text-gray-500">{subtitle}</p>
                    )}
                </div>
            )}

            <div className={clsx("px-6 py-4", bodyClassName)}>{children}</div>

            {(footer || actions.length > 0) && (
                <div
                    className={clsx(
                        "px-6 py-4 border-t border-gray-200 flex items-center justify-between",
                        footerClassName
                    )}
                >
                    {footer}
                    {actions.length > 0 && (
                        <div className="space-x-2">
                            {actions.map((action, index) => (
                                <button
                                    key={index}
                                    className={clsx(
                                        "px-4 py-2 text-sm rounded-lg shadow-sm focus:outline-none transition",
                                        action.variant === "primary"
                                            ? "bg-blue-500 text-white hover:bg-blue-600"
                                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                    )}
                                    onClick={action.onClick}
                                >
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    headerClassName: PropTypes.string,
    bodyClassName: PropTypes.string,
    footer: PropTypes.node,
    footerClassName: PropTypes.string,
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func,
            variant: PropTypes.oneOf(["primary", "secondary"]),
        })
    ),
};

export default Card;
