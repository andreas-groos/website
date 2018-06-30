import React from 'react'
import styled from 'styled-components'
import { theme } from '../utils/theme'
import { SyncLoader } from 'react-spinners'

const Center = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export default ({ loading = false, color = theme.colors.contrast }) => {
    return loading ? (
        <Center>
            <SyncLoader color={color} />
        </Center>
    ) : null
}
