import { ChangeEvent, useState } from 'react'
import { storiesOf } from '@storybook/react'

import { Field } from '..'
import { Box } from '../../../layout/Box'

const TestWrapper = () => {
    const [email, setEmail] = useState('')
    const handleChange = (event: ChangeEvent<any>) => {
        const {
            target: { value },
        } = event
        setEmail(value)
    }
    return (
        <>
            <Field
                id="email"
                label="Email"
                type={Field.Type.Text}
                value={email}
                onChange={handleChange}
            />
        </>
    )
}

storiesOf('Form|Field', module)
    .add('default', () => <TestWrapper />)
    .add('error', () => (
        <>
            <Box mb={5}>
                <Field
                    error="Email is invalid"
                    id="email"
                    label="Email"
                    type={Field.Type.Text}
                    value="thom.meagher@gmailc.om"
                    onChange={() => {}}
                />
            </Box>
            <Field
                error="Password is required"
                id="password"
                label="Password"
                type={Field.Type.Password}
                value=""
                onChange={() => {}}
            />
        </>
    ))
    .add('autofocus', () => (
        <Field
            autofocus
            id="email"
            label="Email"
            type={Field.Type.Text}
            value=""
            onChange={() => {}}
        />
    ))