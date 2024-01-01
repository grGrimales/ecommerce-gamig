'use client';

import styles from './Pagination.module.scss';
import { Pagination as PaginationSU } from 'semantic-ui-react';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

export function Pagination({ currentPage, totalPages}) {
 
    const router = useRouter();


    useEffect(() => {
        if (router.isReady) {
            // Aquí puedes realizar acciones que dependen de que el router esté listo
            console.log("Router is now ready:", router);
        }
    }, [router.isReady]);
    
    const onPageChange = (_, data) => {

        console.log(data, 'data')
        console.log(router, 'router')
        if (router.isReady) {
            console.log("Router isReady:", router.isReady);
            console.log("Current query params:", router.query);

            const newQuery = { ...router.query, page: data.activePage.toString() };
    console.log(newQuery, 'newQuery');
            router.replace({
                pathname: router.pathname,
                query: newQuery,
            }, undefined, { shallow: true });
        }
    };
    
    
    return (
        <>
        <div className={styles.container}>
          <PaginationSU defaultActivePage={currentPage} totalPages={totalPages} ellipsisItem={null} firstItem={null} lastItem={null} onPageChange={onPageChange} /> 
        </div>
        </>
    );
}