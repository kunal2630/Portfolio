function SideChip({ icon, title, description, isHyperLink }) {
    const isEmail = title.toLowerCase().includes('email');
    const link = isEmail ? `mailto:${description}` : description;

    return (
        <div className="flex items-center my-2 gap-3">
            {/* Icon container */}
            <div className="w-10 h-10 p-4 rounded-full bg-[#2e2e2e] flex items-center justify-center mr-3 text-[#FEBF5F]">
                {icon}
            </div>

            {/* Text container */}
            <div className="flex flex-col min-w-0">
                <h1 className="text-sm text-[#979798] m-0">
                    {title}
                </h1>
                {isHyperLink ? (
                    <a
                        href={link}
                        target={isEmail ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="text-white font-semibold text-base truncate lg:max-w-[200px] m-0 hover:underline"
                    >
                        {description}
                    </a>
                ) : (
                    <p className="text-white font-semibold text-base truncate max-w-[200px] m-0">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}

export default SideChip;
