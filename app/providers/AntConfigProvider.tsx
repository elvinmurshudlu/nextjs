'use client'
import {PropsWithChildren} from "react";
import {ConfigProvider} from "antd";
import {useLocale} from "next-intl";
import azAz from 'antd/locale/az_AZ';
import enEn from 'antd/locale/en_US';
import 'dayjs/locale/az';
import 'dayjs/locale/en';

function AntConfigProvider({children}:PropsWithChildren) {
    const locale = useLocale();
    return (
        <ConfigProvider locale={locale === "az" ? azAz : enEn}>
            {children}
        </ConfigProvider>
    );
}
export default AntConfigProvider;