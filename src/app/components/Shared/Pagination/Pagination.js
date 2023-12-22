import styles from './Pagination.module.scss';
import { Pagination as PaginationSU } from 'semantic-ui-react';

export function Pagination({pageSize, totalPages}) {
 


    const onPageChange = (_, data) => {
        console.log(data.activePage);
    }
    return (
        <>
        <div className={styles.container}>
          {/* <PaginationSU totalPages={totalPages} ellipsisItem={null} firstItem={null} lastItem={null} onPageChange={onPageChange} /> */}
        </div>
        </>
    );
}