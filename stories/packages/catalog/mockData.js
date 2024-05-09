
const mockConfig = {
    "kind": "Component",
    "metadata": {
      "description": "Opentelemetry utilities for home lab",
      "system": "packages",
      "application": "extensions",
      "deployableUnit": "opentelemetry",
      "tags": ["python", "package", "telemetry"],
      "annotations": {
        "catcode.io/catdocs-build": true,
        "catcode.io/catdocs-path": ".",
        "catcode.io/dependencies": true,
      },
      'links': [
        {'title': 'google.com', 'url': 'www.google.com', 'icon': 'grafana'},
        {'title': 'test.com', 'url': 'www.test.com', 'icon': 'internet'},
        {'title': 'google.com', 'url': 'www.google.com', 'icon': 'grafana'},
        {'title': 'test.com', 'url': 'www.test.com', 'icon': 'internet'}
        
      ]
    },
    "spec": {
      "type": "pythonPackage",
      "lifecycle": "Development",
      "owner": "mw"
    }
  }
  export default mockConfig