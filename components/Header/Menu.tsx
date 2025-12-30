import { ConfigProvider, Menu } from "antd"

function MenuUl() {
    const items = [
        {
            key: "sub1",
            label: "Navigation One",
            children: [
                {
                    key: "1-1",
                    label: "Item 1",
                    type: "group",
                    children: [
                        { key: "1", label: "Option 1" },
                        { key: "2", label: "Option 2" },
                    ],
                },
                {
                    key: "1-2",
                    label: "Item 2",
                    type: "group",
                    children: [
                        { key: "3", label: "Option 3" },
                        { key: "4", label: "Option 4" },
                    ],
                },
            ],
        },
        {
            key: "sub2",
            label: "Navigation Two",
            children: [
                { key: "5", label: "Option 5" },
                { key: "6", label: "Option 6" },
                {
                    key: "sub3",
                    label: "Submenu",
                    children: [
                        { key: "7", label: "Option 7" },
                        { key: "8", label: "Option 8" },
                    ],
                },
            ],
        },
        {
            key: "sub4",
            label: "Navigation Three",
            children: [
                { key: "9", label: "Option 9" },
                { key: "10", label: "Option 10" },
                { key: "11", label: "Option 11" },
                { key: "12", label: "Option 12" },
            ],
        },
    ]
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        // Aktiv item
                        itemSelectedBg: "#ffffff",
                        itemSelectedColor: "#206eb5",
                        horizontalItemSelectedBg: "#ffffff",
                        horizontalItemSelectedColor:
                            "#206eb5",

                        // Hover effekti
                        itemHoverBg:
                            "rgba(255, 255, 255, 0.1)",
                        itemHoverColor: "#206eb5",

                        // Border radius (smooth keçid üçün)
                        horizontalItemBorderRadius: 8, // və ya 6, 12
                        itemBorderRadius: 8,

                        // Əlavə smooth effektlər
                        itemPaddingInline: 16, // İçəri boşluq
                        itemMarginInline: 4, // İtem-lər arası boşluq
                    },
                },
            }}
        >
            <Menu
                styles={{
                    root: {
                        background: "transparent",
                        padding: "0",
                    },
                }}
                mode="horizontal"
                items={items}
            />
        </ConfigProvider>
    )
}

export default MenuUl
