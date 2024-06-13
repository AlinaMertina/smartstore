export default class Limenu{
    nom 
    icone
    lien 
    listeEnfant
    constructor(nom,icone=undefined,lien='#',listeEnfant=undefined){
        this.setNom(nom);
        this.setIcone(icone)
        this.setLien(lien)
        this.setListeEnfant(listeEnfant);
    }
    setNom(nom){
        this.nom=nom;
    }
    getNom(){
        return this.nom;
    }
    setIcone(icone){
        this.icone=icone;
    }
    getIcone(){
        return this.icone;
    }
    setLien(lien){
        this.lien=lien;
    }
    getLien(){
        return this.lien;
    }
    setListeEnfant(listeEnfant){
        this.listeEnfant=listeEnfant;
    }
    getListeEnfant(){
        return this.listeEnfant;
    }
}