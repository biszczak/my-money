import styled from 'styled-components';
import arrow from '../../../Homepage/images/arrow-down.png';

export const Wrapper = styled.div`
text-align: left;
transition: .3s ease-in-out;

div.input-container {
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    label {
        font-size: 14px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.gray.normal};
    }

    input {
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray.normal};
        padding: 5px 0;

        &:focus {
            border: none;
            outline: none;
            border-bottom: 1px solid ${({ theme }) => theme.colors.pink.normal};
        }
    }

    select {
        border: 0;
        appearance:none;
		background: url(${arrow}) no-repeat 96% center;
        padding: 5px;
        padding-left: 0;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray.normal};

        &:focus {
            border: none;
            outline: none;
            border-bottom: 1px solid ${({ theme }) => theme.colors.pink.normal};
        }
    }

    span {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.red.normal};
    }
}

div.buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
}

`
