export interface DropletCreationRequest {
    name: string;
    region: string;
    size: string;
    image: string;
    ssh_keys: number[];
    backups: boolean;
    ipv6: boolean,
    private_networking: boolean;
    user_data: any;
    monitoring: boolean;
    volumes: string[];
    tags: string[];
}

export interface DropletCreationManyRequest {
    names: string[];
    region: string;
    size: string;
    image: string;
    ssh_keys?: (number | string)[];
    backups?: boolean;
    ipv6?: boolean,
    user_data?: string;
    monitoring?: boolean;
    volumes?: string[];
    tags?: string[];
    vpc_uuid?: string;
}
