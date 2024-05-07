import { ComponentSwitch, SwitchItem } from "@catcode/core-components"


const CatalogPage = () => {
    return (
        <ComponentSwitch>
            <SwitchItem >
                <ApplicationOverviewPage/>
            </SwitchItem>
        </ComponentSwitch>
    )
}