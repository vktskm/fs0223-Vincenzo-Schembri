function somma<T>(a:T, b:T): T{
    return (a as any) + (b as any);
}


let res = somma<number>(10,20);
let res2 = somma<string>('10','20');

