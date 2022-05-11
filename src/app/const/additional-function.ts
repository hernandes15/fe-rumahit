export function setLoading(value: boolean) {
    if (value) {
        document.getElementById('loading').style.display = 'block';
    } else {
        document.getElementById('loading').style.display = 'none';
    }
}

export function checkPermissionByComponentName(permission, name) {
    let tempArr: any[] = permission.components;
    tempArr = tempArr.length > 0 ? tempArr.map(e => { return e.name.toUpperCase() }) : [];
    return tempArr.indexOf(name) != -1 ? true : false;
}

export function checkPermissionFieldByComponentName(permission, compName, fieldName) {
    let tempArr: any[] = permission.components;
    if (tempArr.length > 0) {
        let i = tempArr.findIndex(e => e.name == compName);
        if (tempArr.findIndex(e => e.name == compName) != -1) {
            let fields: any[] = tempArr[i]['childs']['fields'];
            if (fields.indexOf(fieldName) != -1) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}


export function compareSort(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

export function dirtyTouched(form, field_name){
    return form.get(field_name).invalid && (form.get(field_name).dirty || form.get(field_name).touched)
}