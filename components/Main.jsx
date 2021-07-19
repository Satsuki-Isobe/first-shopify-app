import { ResourcePicker } from '@shopify/app-bridge/actions'
import { Button, Layout } from '@shopify/polaris'
import React, { useState } from 'react'

export const Main = () => {
    const [active, setActive] = useState(false);
    // const handleChange = () => setActive(!active);

    return (
        <>
            <Layout.Section>
                <Button onClick={() => setActive(!active)}>Click</Button>
            </Layout.Section>

            <ResourcePicker 
            resourceType='Product'
            open={active}
            onCancel={() => setActive(false)}
            />
        </>
    )
}
