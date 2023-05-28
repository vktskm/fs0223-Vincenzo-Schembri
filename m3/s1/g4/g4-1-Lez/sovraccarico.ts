  function add(a: number, b: number): number;
  function add(a: string, b: string): string;

  function add(a:any, b: any): any{
    return a + b;
  }

  console.log( add('Hello ','World') );
  console.log( add(10,20) );
  