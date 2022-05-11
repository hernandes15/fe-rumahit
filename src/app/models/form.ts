export class Form {
    name: string;
    description: string;
    active_version: string;
    attribute1: string;
    attribute2: string;
    attribute3: string;
    active: boolean;
}


export class cProcMsgs {
    message_id: string;
    message_name: string;
}

export class cProc {
    proc_uuid: string;
    proc_def_key: string;
    description: string;
    messages: cProcMsgs[];
}