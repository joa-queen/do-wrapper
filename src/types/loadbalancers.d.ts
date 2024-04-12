export interface LoadBalancerCreationOptions {
    droplet_ids: string[];
    region: string;
    name?: string;
    project_id?: string;
    size_unit?: number;
    forwarding_rules: LoadBalancerForwardingRule[];
    health_check?: LoadBalancerHealthcheck;
    sticky_sessions?: LoadBalancerStickySessions;
    redirect_http_to_https?: boolean;
    enable_proxy_protocol?: boolean;
    enable_backend_keepalive?: boolean;
    http_idle_timeout?: number;
    vpc_uuid?: string;
    disable_lets_encrypt_dns_records?: boolean;
    firewall?: LoadBalancerFirewall;
}

export interface LoadBalancerForwardingRule {
    entry_protocol: string;
    entry_port: number;
    target_protocol: string;
    target_port: number;
    certificate_id?: string;
    tls_passthrough?: boolean;
}

export interface LoadBalancerHealthcheck {
    protocol?: string;
    port?: number;
    path?: string;
    check_interval_seconds?: number;
    response_timeout_seconds?: number;
    healthy_threshold?: number;
    unhealthy_threshold?: number;
}

export interface LoadBalancerStickySessions {
    type: string;
    cookie_name?: string;
    cookie_ttl_seconds?: number;
}

export interface LoadBalancerFirewall {
    deny: string[];
    allow: string[];
}
