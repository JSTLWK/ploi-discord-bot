
/**
 * Interface from Server listing from PLoi API.
 * Docs: https://developers.ploi.io/servers/list-servers
 */
export interface Server {
    id: Number,
    status: String,
    type: String,
    name: String,
    ip_address: String,
    internal_ip: String | null,
    ssh_port: Number,
    reboot_required: Boolean,
    php_version: Number,
    mysql_version: Number,
    sites_count: Number,
    monitoring: Number,
    opcache: Boolean,
    installed_php_versions: Array<[]>
    status_id: Number,
    created_at: String
} 

/**
 * Interface from Sites Listing from Ploi API
 * Docs: https://developers.ploi.io/sites/list-sites
 */
export interface Site {
    id: Number,
    status: String,
    server_id: Number,
    domain: String,
    deploy_script: Boolean,
    web_directory: String,
    project_type: String,
    project_root: String,
    last_deploy_at: String | null,
    system_user: String,
    php_version: String,
    health_url: String | null,
    notification_urls: notificationUrls,
    has_repository: Boolean,
    created_at: String
 }

interface notificationUrls {
    slack: String | null,
    discord: String | null,
    webhook: String | null,
}