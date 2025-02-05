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

            {footer && (
                <div
                    className={clsx(
                        "px-6 py-4 border-t border-gray-200 flex items-center justify-between",
                        footerClassName
                    )}
                >
                    {footer}
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
