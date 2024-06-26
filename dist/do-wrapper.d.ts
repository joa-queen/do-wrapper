import Account from './modules/account';
import Actions from './modules/actions';
import CDN from './modules/cdn';
import Certificates from './modules/certificates';
import Databases from './modules/databases';
import Domains from './modules/domains';
import Droplets from './modules/droplets';
import Firewalls from './modules/firewalls';
import FloatingIPs from './modules/floating-ip';
import Images from './modules/images';
import Keys from './modules/keys';
import Kubernetes from './modules/kubernetes';
import LoadBalancers from './modules/load-balancers';
import Monitoring from './modules/monitoring';
import Projects from './modules/projects';
import Regions from './modules/regions';
import Registry from './modules/registry';
import Reports from './modules/reports';
import Sizes from './modules/sizes';
import Snapshots from './modules/snapshots';
import Tags from './modules/tags';
import Volumes from './modules/volumes';
import Vpcs from './modules/vpcs';
export default class DigitalOcean {
    account: Account;
    actions: Actions;
    cdn: CDN;
    certificates: Certificates;
    databases: Databases;
    domains: Domains;
    droplets: Droplets;
    firewalls: Firewalls;
    floatingIPs: FloatingIPs;
    images: Images;
    keys: Keys;
    kubernetes: Kubernetes;
    loadBalancers: LoadBalancers;
    monitoring: Monitoring;
    projects: Projects;
    regions: Regions;
    registry: Registry;
    reports: Reports;
    sizes: Sizes;
    snapshots: Snapshots;
    tags: Tags;
    volumes: Volumes;
    vpcs: Vpcs;
    constructor(token: string, pageSize?: number);
}
