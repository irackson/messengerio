import styles from './index.module.scss';
import { Login } from '@irackson/useful-comps';
import { useState, useEffect } from 'react';

export function Index() {
    const [id, setId] = useState<string>();

    return (
        <div className={styles.page}>
            <Login onIdSubmit={setId}></Login>
        </div>
    );
}

export default Index;
