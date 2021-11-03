import {Chec, request} from 'chec-request';

const commerce = new Chec("pk_test_354563b4401c489a46719c7cfcc2378bfc530885f3b77");

export async function getTermekek() {
    let data = await commerce.get('products');
    return data.data;
}