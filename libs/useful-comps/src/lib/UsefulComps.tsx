import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UsefulCompsProps {}

const StyledUsefulComps = styled.div`
    color: pink;
`;

export function UsefulComps(props: UsefulCompsProps) {
    return (
        <StyledUsefulComps>
            <h1>Welcome UsefulComps!</h1>
        </StyledUsefulComps>
    );
}

export default UsefulComps;
