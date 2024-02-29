import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

const _default = new gcp.cloudrun.Service("default", {
    name: "cloudrun-srv",
    location: "us-central1",
    template: {
        spec: {
            containers: [{
                image: "us-docker.pkg.dev/cloudrun/container/hello",
            }],
        },
    },
    traffics: [{
        percent: 100,
        latestRevision: true,
    }],
});
