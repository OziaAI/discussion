{pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
    buildInputs = [
        pkgs.nodejs_21
        pkgs.nodePackages_latest.prettier
    ];
}
