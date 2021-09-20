import { render } from '@testing-library/react';

import UsefulComps from './UsefulComps';

describe('UsefulComps', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<UsefulComps />);
        expect(baseElement).toBeTruthy();
    });
});
