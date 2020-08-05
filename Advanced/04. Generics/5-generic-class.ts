// generic class
class KeyValuePair<T, U>
{
   private key: T;
   private val: U;

   setKeyValue(key: T, val: U): void {
      this.key = key;
      this.val = val;
   }

   display(): void {
      console.log(`key: ${this.key}, val: ${this.val}`);
   }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Steve");
kvp1.display(); // key: 1, val: Steve

let kvp2 = new KeyValuePair<string, string>();
kvp2.setKeyValue("E001", "Bill");
kvp2.display(); // key: E001, val: Bill
