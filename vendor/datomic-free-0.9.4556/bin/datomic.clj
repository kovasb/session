;; Copyright (c) Metadata Partners, LLC.
;; All rights reserved.

(ns datomic
  (:require [datomic.require :as req]
            [datomic.cli :as cli]))

(def commands
  "Map of command names to descriptions of command arguments."
   {'create-dynamodb-system
    {:f 'datomic.provisioning.aws/create-system-command
     :named #{{:long-name :region :required true :doc "AWS region for DynamoDB table"}
              {:long-name :table-name :required true :doc "DynamoDB table name"}
              {:long-name :read-capacity :required false :default 100 :coerce #(Long. %) :doc "read capacity"}
              {:long-name :write-capacity :required false :default 50 :coerce #(Long. %) :doc "write capacity"}}
     :positional [:region :table-name :read-capacity :write-capacity]}
    'create-cf-template
    {:f 'datomic.provisioning.aws/create-cf-template
     :named #{{:long-name :ddb-properties :required true :doc "DynamoDB properties file"}
              {:long-name :cf-properties :required true :doc "CloudFormation properties file"}
              {:long-name :json-template :required true :doc "CloudFormation template file"}}
     :positional [:ddb-properties :cf-properties :json-template]}
    'create-aws-credentials
    {:f 'datomic.iam/create-credentials-command
     :named #{{:long-name :prefix :required true :doc "prefix to use for credentials"}}
     :positional [:prefix]}    
    'assign-peer-user
    {:f 'datomic.iam/assign-peer-user-command
     :named #{{:long-name :user-name :required true :doc "name of peer user"}
              {:long-name :table-name :required true :doc "dynamodb table name"}}
     :positional [:user-name :table-name]}
    'assign-transactor-dynamo-user
    {:f 'datomic.iam/assign-transactor-dynamo-user-command
     :named #{{:long-name :user-name :required true :doc "name of transactor dynamo user"}
              {:long-name :table-name :required true :doc "dynamodb table name"}}
     :positional [:user-name :table-name]}
    'assign-transactor-log-user
    {:f 'datomic.iam/assign-transactor-log-user-command
     :named #{{:long-name :user-name :required true :doc "name of transactor log user"}
              {:long-name :bucket-name :required true :doc "name of s3 bucket for logs"}}
     :positional [:user-name :bucket-name]}
    'assign-transactor-metrics-user
    {:f 'datomic.iam/assign-transactor-metrics-user-command
     :named #{{:long-name :user-name :required true :doc "name of transactor metrics user"}}
     :positional [:user-name]}
    'dynamo-r-policy
    {:f 'datomic.iam/dynamo-r-policy-command
     :named #{{:long-name :account-id :required true :doc "AWS account id"}
              {:long-name :table-name :required true :doc "dynamodb table name"}}
     :positional [:account-id :table-name]}
    'dynamo-rw-policy
    {:f 'datomic.iam/dynamo-rw-policy-command
     :named #{{:long-name :account-id :required true :doc "AWS account id"}
              {:long-name :table-name :required true :doc "dynamodb table name"}}
     :positional [:account-id :table-name]}
    'metrics-w-policy
    {:f 'datomic.iam/metrics-w-policy-command}
    's3-w-policy
    {:f 'datomic.iam/s3-w-policy-command
     :named #{{:long-name :bucket-name :required true :doc "name of s3 bucket to use for logs"}}
     :positional [:bucket-name]}
    'create-cf-stack
    {:f 'datomic.cloudformation/create-stack-command
     :named #{{:long-name :region :required true :doc "AWS region"}
              {:long-name :stack-name :required true :doc "name of new cloud formation stack"}
              {:long-name :template-file :required true :doc "name of template file for new stack"}}
     :positional [:region :stack-name :template-file]}
    'delete-cf-stack
    {:f 'datomic.cloudformation/delete-stack-command
     :named #{{:long-name :region :required true :doc "AWS region"}
              {:long-name :stack-name :required true :doc "name of cloud formation stack to delete"}}
     :positional [:region :stack-name]}
    'ec2-authorize-security-group-ingress
    {:f 'datomic.ec2/authorize-security-group-ingress-command
     :named #{{:long-name :group-name :required true :doc "name of security group"}
              {:long-name :protocol :required true :doc "protocol to allow (tcp or udp)"}
              {:long-name :port :required true :coerce #(Integer. %) :doc "ip port number"}
              {:long-name :address :required true :doc "ip address"}}
     :positional [:group-name :address :protocol :port]}    
    'ec2-create-security-group
    {:f 'datomic.ec2/create-security-group-command
     :named #{{:long-name :group-name :required true :doc "name of new security group"}
              {:long-name :description :required true :doc "description of new security group"}}
     :positional [:group-name :description]}
    'iam-create-access-key
    {:f 'datomic.iam/create-access-key-command
     :named #{{:long-name :user-name :required true :doc "name of user to create access key for"}}
     :positional [:user-name]}
    'iam-create-user
    {:f 'datomic.iam/create-user-command
     :named #{{:long-name :user-name :required true :doc "name of new user"}}
     :positional [:user-name]}
    'iam-create-group
    {:f 'datomic.iam/create-group-command
     :named #{{:long-name :group-name :required true :doc "name of new group"}}
     :positional [:group-name]}
    'iam-get-account-id
    {:f 'datomic.iam/get-account-id-command}
    'ensure-transactor
    {:f 'datomic.provisioning.aws/ensure-transactor
     :named #{{:long-name :input-file :required true :doc "name of transactor.properties to consume"}
              {:long-name :output-file :required true :doc "name of transactor.properties to produce"}}
     :positional [:input-file :output-file]}
    'ensure-cf
    {:f 'datomic.provisioning.aws/ensure-cf
     :named #{{:long-name :input-file :required true :doc "name of cloudformation.properties to consume"}
              {:long-name :output-file :required true :doc "name of cloudformation.properties to produce"}}
     :positional [:input-file :output-file]}
    'backup-db
    {:f 'datomic.backup-cli/backup
     :named #{{:long-name :from-db-uri :required true :doc "URI for backup source"}
              {:long-name :to-backup-uri :required true :doc "URI for backup destination"}}
     :positional [:from-db-uri :to-backup-uri]}
    'list-backups
    {:f 'datomic.backup-cli/list-backups
     :named #{{:long-name :backup-uri :required true :doc "backup URI"}}
     :positional [:backup-uri :to-db-uri]}
    'restore-db
    {:f 'datomic.backup-cli/restore
     :named #{{:long-name :from-backup-uri :required true :doc "URI for restore source"}
              {:long-name :to-db-uri :required true :doc "URI for restore destination"}
              {:long-name :t :doc "Point in time (t) to restore, defaults to most recent"
               :default nil :coerce #(Long. %)}}
     :positional [:from-backup-uri :to-db-uri :t]}
    'revert-to-log-version-1
    {:f 'datomic.peer/revert-to-log-version-1
     :named #{{:long-name :db-uri :required true :doc "Reset this database to use log version 1 (compatible with Datomic <= 0.9.4497)"}}
     :positional [:db-uri]}
    })

(defn -main
  [& args]
  (let [command (when-let [cname (first args)]
                  (symbol cname))
        cli-args (rest args)]
    (if-let [{:keys [f named positional vararg]} (get commands command)]
      (let [args (cli/parse-or-exit! command cli-args named positional vararg)]
        (try
          (when-let [result (req/require-and-run f args)]
            (println result))
          (catch com.amazonaws.AmazonServiceException ase
            (println "*** ERROR"
                     (.getServiceName ase)
                     (.getErrorCode ase)
                     (.getMessage ase))
            (cli/fail (.getMessage ase)))
          (catch com.amazonaws.AmazonClientException ace
            (println "*** ERROR" (.getMessage ace))
            (cli/fail (.getMessage ace)))
          (catch Throwable t
            (.printStackTrace t)
            (cli/fail (.getMessage t))))
        (when @cli/exit-after-command
          (System/exit (if @cli/failed -1 0))))
      (do
        (println (str "Command " command " not found. Available commands: "))
        (doseq [[k v] (sort commands)]
          (println "\t" k))
        (System/exit -1)))))
