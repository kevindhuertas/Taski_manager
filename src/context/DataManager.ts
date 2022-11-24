export default class DataManager {
  tableName: string;
  constructor(tableName: string) {
    this.tableName = tableName;
  }

  public getData():any[]{
    return JSON.parse(localStorage.getItem(this.tableName) ?? "[]");
  }


  public getDataById(id:string){

  }

  public saveData(body){
    localStorage.setItem(this.tableName, JSON.stringify(body));
  }

  public saveDataById(id:string, body:object){

  }

  public deleteData(id:string){

  }



}
