'use strict';

// external imports
const Inotify = require('inotify').Inotify;

// local imports

// implementation
const TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_1 = [
    Inotify.IN_MODIFY,
    Inotify.IN_OPEN,
    Inotify.IN_MODIFY,
    Inotify.IN_CLOSE_WRITE,
    Inotify.IN_OPEN,
    Inotify.IN_ACCESS,
    Inotify.IN_CLOSE_NOWRITE
];

const TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_2 = [
    Inotify.IN_MODIFY,
    Inotify.IN_OPEN,
    Inotify.IN_MODIFY,
    Inotify.IN_CLOSE_WRITE,
    Inotify.IN_OPEN,
    Inotify.IN_CLOSE_NOWRITE
];

const TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_3 = [
    Inotify.IN_OPEN,
    Inotify.IN_MODIFY,
    Inotify.IN_CLOSE_WRITE,
    Inotify.IN_OPEN,
    Inotify.IN_ACCESS,
    Inotify.IN_CLOSE_NOWRITE
];

const TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_4 = [ // ubuntu 16.04 LTS command line
    Inotify.IN_MODIFY,
    Inotify.IN_OPEN,
    Inotify.IN_MODIFY,
    Inotify.IN_CLOSE_WRITE
];

const TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_5 = [
    Inotify.IN_MODIFY,
    Inotify.IN_CLOSE_WRITE,
    Inotify.IN_OPEN,
    Inotify.IN_CLOSE_NOWRITE,
    Inotify.IN_OPEN,
    Inotify.IN_ACCESS,
    Inotify.IN_CLOSE_NOWRITE,
];

const TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_6 = [
    Inotify.IN_MODIFY,
    Inotify.IN_CLOSE_NOWRITE,
];

const TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_7 = [
    Inotify.IN_MODIFY,
    Inotify.IN_CLOSE_WRITE,
];

const TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_8 = [
    Inotify.IN_MODIFY,
    Inotify.IN_CLOSE_WRITE,
    Inotify.IN_OPEN,
    Inotify.IN_CLOSE_NOWRITE,
];

const TAR_ARCHIVE_MODIFIED_MASK_CHAINS = [
    TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_1,
    TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_2,
    TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_3,
    TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_4,
    TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_5,
    TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_6,
    TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_7,
    TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_8
];

// exports
exports.TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_1 = TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_1;
exports.TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_2 = TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_2;
exports.TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_3 = TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_3;
exports.TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_4 = TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_4;
exports.TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_5 = TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_5;
exports.TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_6 = TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_6;
exports.TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_7 = TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_7;
exports.TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_8 = TAR_ARCHIVE_MODIFIED_MASK_CHAIN_VARIANT_8;

exports.TAR_ARCHIVE_MODIFIED_MASK_CHAINS = TAR_ARCHIVE_MODIFIED_MASK_CHAINS;
