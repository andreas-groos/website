import React from 'react'
import styled from 'styled-components'
import { theme } from '../utils/theme'
import { SyncLoader } from 'react-spinners'
import PropTypes from 'prop-types';

const Center = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const Spinner = ({ loading = false, color = theme.colors.contrast }) => {
    return loading ? (
        <Center>
            <SyncLoader color={color} />
        </Center>
    ) : null
}

Spinner.PropTypes = {
    loading: PropTypes.bool,
    color: PropTypes.string,
} 