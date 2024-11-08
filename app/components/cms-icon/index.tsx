type CMSIconProps = {
    icon: string
}

const CMSIcon = ({ icon }: CMSIconProps) => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: icon,
            }}
        />
    )
}

export default CMSIcon
