function constructionCrew(Obj){

    // if dizziness is false do not modified the Obj
    if (!Obj.dizziness) {
        return Obj;
    }
    Obj.levelOfHydrated += Obj.weight * Obj.experience * 0.1;

    return Obj;
}

const res = constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false })

console.log(res);