window.BENCHMARK_DATA = {
  "lastUpdate": 1689921579206,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3057b13bde32b53348fce9975f6d496c22c86c20",
          "message": "Merge pull request #3316 from OnedgeLee/release/2.6.0\n\n🚀 Release 3.0.0",
          "timestamp": "2023-07-19T16:32:06+09:00",
          "tree_id": "3b62a9dc282845b24f541286df67c4900303950b",
          "url": "https://github.com/planetarium/libplanet/commit/3057b13bde32b53348fce9975f6d496c22c86c20"
        },
        "date": 1689753170812,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8312089.6875,
            "unit": "ns",
            "range": "± 255806.7850443727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20284215.7,
            "unit": "ns",
            "range": "± 807806.601301358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49656290.68181818,
            "unit": "ns",
            "range": "± 925989.3717276717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100719467.96666667,
            "unit": "ns",
            "range": "± 1807164.760064144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204066701.14285713,
            "unit": "ns",
            "range": "± 2843098.1175776394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54893.02173913043,
            "unit": "ns",
            "range": "± 5570.319204810283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311754.4683544304,
            "unit": "ns",
            "range": "± 16116.391773304977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293646.06315789477,
            "unit": "ns",
            "range": "± 16766.155255746573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299290.5689655172,
            "unit": "ns",
            "range": "± 15904.314555602845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4190409.616438356,
            "unit": "ns",
            "range": "± 206986.10449574402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3605286.653846154,
            "unit": "ns",
            "range": "± 98654.36017082764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16257.634146341463,
            "unit": "ns",
            "range": "± 1338.2382076077167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80313.05319148937,
            "unit": "ns",
            "range": "± 6634.382690598446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81592.02222222222,
            "unit": "ns",
            "range": "± 9159.78351515168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90504.60869565218,
            "unit": "ns",
            "range": "± 10473.45243618886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5011.894736842105,
            "unit": "ns",
            "range": "± 746.7960568347421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16097.93023255814,
            "unit": "ns",
            "range": "± 1380.4577569069802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1552362.59375,
            "unit": "ns",
            "range": "± 203916.05956391795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2670102.850877193,
            "unit": "ns",
            "range": "± 113363.60078675594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2002632.2083333333,
            "unit": "ns",
            "range": "± 182027.51646535643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5724017.956043956,
            "unit": "ns",
            "range": "± 320935.81977200886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3342923.641025641,
            "unit": "ns",
            "range": "± 116455.13455731563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3519749.255319149,
            "unit": "ns",
            "range": "± 226034.4105222204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4386803.127272727,
            "unit": "ns",
            "range": "± 185341.02291562283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3894587.9791666665,
            "unit": "ns",
            "range": "± 258976.51073643847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7387806.584905661,
            "unit": "ns",
            "range": "± 280864.5287597559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6308546.804166666,
            "unit": "ns",
            "range": "± 49767.63482983064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1923912.140625,
            "unit": "ns",
            "range": "± 15162.78022096051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1267376.2037760417,
            "unit": "ns",
            "range": "± 10944.486918649853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2857621.153846154,
            "unit": "ns",
            "range": "± 29287.069296124613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854009.775390625,
            "unit": "ns",
            "range": "± 3316.4064274454418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794707.15859375,
            "unit": "ns",
            "range": "± 4080.801081983647"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2944cbdfc0856cfea856725e91ccfa35e9d22e97",
          "message": "Merge pull request #3317 from OnedgeLee/release/3.0.0\n\nRelease 3.0.0",
          "timestamp": "2023-07-19T16:48:08+09:00",
          "tree_id": "4806b239338e622d86b96616645a9fd8f178931b",
          "url": "https://github.com/planetarium/libplanet/commit/2944cbdfc0856cfea856725e91ccfa35e9d22e97"
        },
        "date": 1689754102071,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9024992.802083334,
            "unit": "ns",
            "range": "± 533509.1153254848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22319681.322580647,
            "unit": "ns",
            "range": "± 1016383.8324679382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55609087.35714286,
            "unit": "ns",
            "range": "± 720382.6829540626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109261705.73076923,
            "unit": "ns",
            "range": "± 1683398.2228257894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220206561.07142857,
            "unit": "ns",
            "range": "± 6260196.331296546"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64821.967391304344,
            "unit": "ns",
            "range": "± 12084.354472660218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318444.65476190473,
            "unit": "ns",
            "range": "± 16573.788634426703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293318.17142857146,
            "unit": "ns",
            "range": "± 14179.926027455127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291271.9032258064,
            "unit": "ns",
            "range": "± 13131.35381594988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4135909.4,
            "unit": "ns",
            "range": "± 75842.9476463416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3693918.4545454546,
            "unit": "ns",
            "range": "± 90130.64073820174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17800.625,
            "unit": "ns",
            "range": "± 2383.9499829175593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93151.83,
            "unit": "ns",
            "range": "± 12627.42019691251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110215.1105263158,
            "unit": "ns",
            "range": "± 11447.901477577167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109994.28125,
            "unit": "ns",
            "range": "± 17261.90834068386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6296.972527472528,
            "unit": "ns",
            "range": "± 966.1831933571207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20471.61111111111,
            "unit": "ns",
            "range": "± 3980.5929000376577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1597169.6717171718,
            "unit": "ns",
            "range": "± 148013.0314513874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3066904.010989011,
            "unit": "ns",
            "range": "± 197086.6517698635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2142855.785714286,
            "unit": "ns",
            "range": "± 191347.71507805568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6089011.895061729,
            "unit": "ns",
            "range": "± 317833.9787799866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3691014.9242424243,
            "unit": "ns",
            "range": "± 321783.8413590679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3691850.0918367347,
            "unit": "ns",
            "range": "± 275484.91759374173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4512456.302631579,
            "unit": "ns",
            "range": "± 226900.99289801973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4170764.963917526,
            "unit": "ns",
            "range": "± 349644.00735855795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7271966,
            "unit": "ns",
            "range": "± 302699.39608602814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7008639.617919922,
            "unit": "ns",
            "range": "± 217136.91510776393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2167287.8151367186,
            "unit": "ns",
            "range": "± 76099.84660557105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387046.016731771,
            "unit": "ns",
            "range": "± 25199.83319369051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2956797.9833333334,
            "unit": "ns",
            "range": "± 55031.34291399229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 943624.1962890625,
            "unit": "ns",
            "range": "± 12136.622906790215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805496.2158854167,
            "unit": "ns",
            "range": "± 23428.168378572962"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55e702f061b2cec4b9aea6c7cb7fb89f796af97e",
          "message": "Merge pull request #3319 from OnedgeLee/prepare/3.0.1\n\n🔧 Prepare 3.0.1",
          "timestamp": "2023-07-19T17:22:11+09:00",
          "tree_id": "58becc2634fa58da975dbbfce9e5efc137e1e102",
          "url": "https://github.com/planetarium/libplanet/commit/55e702f061b2cec4b9aea6c7cb7fb89f796af97e"
        },
        "date": 1689755996469,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8421061.8,
            "unit": "ns",
            "range": "± 153445.30695388318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21729226.7,
            "unit": "ns",
            "range": "± 321345.96927081567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55041576.70689655,
            "unit": "ns",
            "range": "± 1502819.4308138993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111612162.5,
            "unit": "ns",
            "range": "± 4455476.881529471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224804779.40625,
            "unit": "ns",
            "range": "± 6985434.961206998"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74227.77586206897,
            "unit": "ns",
            "range": "± 5377.640008642278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373510.1923076923,
            "unit": "ns",
            "range": "± 41085.7948749233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342268.3804347826,
            "unit": "ns",
            "range": "± 30505.567948927717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328157.97191011236,
            "unit": "ns",
            "range": "± 22853.814115775218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4341195.62962963,
            "unit": "ns",
            "range": "± 121677.35191769955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4062468.552631579,
            "unit": "ns",
            "range": "± 88535.0880263323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19152.354166666668,
            "unit": "ns",
            "range": "± 2920.719085860325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99131.73958333333,
            "unit": "ns",
            "range": "± 16063.950130810092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99606.5,
            "unit": "ns",
            "range": "± 13836.566694622508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110815.83333333333,
            "unit": "ns",
            "range": "± 13950.045140592247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5734.252688172043,
            "unit": "ns",
            "range": "± 893.6634136338442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17550.458333333332,
            "unit": "ns",
            "range": "± 2355.534736101859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640790.4086021506,
            "unit": "ns",
            "range": "± 166393.33893709682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3057195.108108108,
            "unit": "ns",
            "range": "± 147711.5335628009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2226830.7150537632,
            "unit": "ns",
            "range": "± 176982.39629488395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5914342.476744186,
            "unit": "ns",
            "range": "± 216119.2559171119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3592727.147727273,
            "unit": "ns",
            "range": "± 302594.88202823105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3789195.85483871,
            "unit": "ns",
            "range": "± 253160.05144755176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5003109.26744186,
            "unit": "ns",
            "range": "± 626800.2467941897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4230963.098901099,
            "unit": "ns",
            "range": "± 424427.42909673956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7868582.287234043,
            "unit": "ns",
            "range": "± 608187.0578037228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6735625.024553572,
            "unit": "ns",
            "range": "± 109632.7023262354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2054291.4662388393,
            "unit": "ns",
            "range": "± 26431.373095886178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1281893.3357872595,
            "unit": "ns",
            "range": "± 12357.845986756909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2690106.071875,
            "unit": "ns",
            "range": "± 42733.88064757354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782758.7741887019,
            "unit": "ns",
            "range": "± 6778.766898196571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725482.8738839285,
            "unit": "ns",
            "range": "± 9282.912092973635"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c454b80d65b60a7ba6e1e2dffdd4cfb2428b00e0",
          "message": "Merge pull request #3326 from greymistcube/chore/backport-fixes\n\n🔨 Fix tests and builds",
          "timestamp": "2023-07-21T12:52:03+09:00",
          "tree_id": "8ab99b0372c8aface09570a6bbc0942e1ca8b34d",
          "url": "https://github.com/planetarium/libplanet/commit/c454b80d65b60a7ba6e1e2dffdd4cfb2428b00e0"
        },
        "date": 1689912417130,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7699688.25,
            "unit": "ns",
            "range": "± 80473.78091835536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19834272.82051282,
            "unit": "ns",
            "range": "± 677073.8086729064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45950736.13333333,
            "unit": "ns",
            "range": "± 549346.8695563938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91786741.76923077,
            "unit": "ns",
            "range": "± 1350750.5009504997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192389288.56666666,
            "unit": "ns",
            "range": "± 1999199.064007615"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56703.46842105263,
            "unit": "ns",
            "range": "± 6769.3859167934515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297905.141025641,
            "unit": "ns",
            "range": "± 15372.410311920354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279962.7802197802,
            "unit": "ns",
            "range": "± 16134.751327355634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274467.25641025644,
            "unit": "ns",
            "range": "± 9340.087184643093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4045639.285714286,
            "unit": "ns",
            "range": "± 94637.4905601067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3565937.769230769,
            "unit": "ns",
            "range": "± 43687.82977587284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16914.03488372093,
            "unit": "ns",
            "range": "± 1859.1179530827765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81820.06451612903,
            "unit": "ns",
            "range": "± 7777.460081664154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84471.17021276595,
            "unit": "ns",
            "range": "± 10744.896540667147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99638.47368421052,
            "unit": "ns",
            "range": "± 18451.998224745264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4609.505882352942,
            "unit": "ns",
            "range": "± 540.2201849054436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16678.304347826088,
            "unit": "ns",
            "range": "± 2271.3602485915767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1585741.1717171718,
            "unit": "ns",
            "range": "± 178506.465779142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2873849.75,
            "unit": "ns",
            "range": "± 132963.36340165048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2051386.144329897,
            "unit": "ns",
            "range": "± 191265.09150287707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5875085.0617283955,
            "unit": "ns",
            "range": "± 298667.9659421288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3079585.403846154,
            "unit": "ns",
            "range": "± 125964.85111802678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3273891.0322580645,
            "unit": "ns",
            "range": "± 193916.5168873637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4251634.863636363,
            "unit": "ns",
            "range": "± 199076.54882055847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3645873.676056338,
            "unit": "ns",
            "range": "± 178645.62846946664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6990887.163636364,
            "unit": "ns",
            "range": "± 291337.9506230067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6067122.553125,
            "unit": "ns",
            "range": "± 43510.31345994173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1873557.7184244792,
            "unit": "ns",
            "range": "± 9302.292810722442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1278187.9842447916,
            "unit": "ns",
            "range": "± 11661.66545853116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658919.265625,
            "unit": "ns",
            "range": "± 15498.454935542364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802433.3527994792,
            "unit": "ns",
            "range": "± 3269.560779058281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726324.1041666666,
            "unit": "ns",
            "range": "± 2881.8857728735366"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a4005d9c54b5f043d14a6adfa26be6b86f0c33c",
          "message": "Merge pull request #3327 from OnedgeLee/release/3.0.1\n\n🚀 Release 3.0.1",
          "timestamp": "2023-07-21T14:48:22+09:00",
          "tree_id": "d32e848727b58e4299385bc6aefbdc967485163f",
          "url": "https://github.com/planetarium/libplanet/commit/6a4005d9c54b5f043d14a6adfa26be6b86f0c33c"
        },
        "date": 1689919418546,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7615716.357142857,
            "unit": "ns",
            "range": "± 44370.99651774819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19023380.65,
            "unit": "ns",
            "range": "± 421222.3555474903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46121182.538461536,
            "unit": "ns",
            "range": "± 462078.67697857384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94564063.875,
            "unit": "ns",
            "range": "± 1754142.5973002643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193551355.64285713,
            "unit": "ns",
            "range": "± 2035719.3379933904"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55543.89247311828,
            "unit": "ns",
            "range": "± 5568.773939025041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301811.93827160494,
            "unit": "ns",
            "range": "± 14964.432599789474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288187.5432098765,
            "unit": "ns",
            "range": "± 13981.761553045973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286585.5875,
            "unit": "ns",
            "range": "± 14955.76309197003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4019534.282608696,
            "unit": "ns",
            "range": "± 101277.95219500751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3581628.772727273,
            "unit": "ns",
            "range": "± 84248.14327708572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17823.88888888889,
            "unit": "ns",
            "range": "± 2007.1607060410372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86437.64130434782,
            "unit": "ns",
            "range": "± 7168.653849418362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78503.16666666667,
            "unit": "ns",
            "range": "± 6712.555826556505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100538.375,
            "unit": "ns",
            "range": "± 13739.81894177036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5387.047058823529,
            "unit": "ns",
            "range": "± 740.9972030324816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17680.60465116279,
            "unit": "ns",
            "range": "± 1887.7248819930728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1557750.2525252525,
            "unit": "ns",
            "range": "± 169471.8577704578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2845514.6744186045,
            "unit": "ns",
            "range": "± 167861.80351658264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2001925.3789473684,
            "unit": "ns",
            "range": "± 200882.9314307099"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5635873.375,
            "unit": "ns",
            "range": "± 220537.45353139384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3138368.205128205,
            "unit": "ns",
            "range": "± 108245.69106123918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3266685.295774648,
            "unit": "ns",
            "range": "± 152828.2283177886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4278919.948275862,
            "unit": "ns",
            "range": "± 185873.73085317353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3723528.5425531915,
            "unit": "ns",
            "range": "± 236458.18958228204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7142976.990196078,
            "unit": "ns",
            "range": "± 248889.85078442813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6045451.4125,
            "unit": "ns",
            "range": "± 29499.055880889788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1914487.6078404018,
            "unit": "ns",
            "range": "± 6951.252775376067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1237271.4912760416,
            "unit": "ns",
            "range": "± 9058.087854286485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2433682.1808035714,
            "unit": "ns",
            "range": "± 20461.79655308838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 763052.2141927084,
            "unit": "ns",
            "range": "± 6091.62928449514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 704196.719921875,
            "unit": "ns",
            "range": "± 5430.9792643552555"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "749b9e7ce54aded937419507b4b4ebac3550f892",
          "message": "Merge pull request #3331 from OnedgeLee/prepare/3.0.2\n\n🔧 Prepare 3.0.2",
          "timestamp": "2023-07-21T15:19:28+09:00",
          "tree_id": "8f0ca409e45d6626d43d9b9df922d6e7dee4e64a",
          "url": "https://github.com/planetarium/libplanet/commit/749b9e7ce54aded937419507b4b4ebac3550f892"
        },
        "date": 1689921529161,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9190897.788135594,
            "unit": "ns",
            "range": "± 405857.63528093125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22267952.96153846,
            "unit": "ns",
            "range": "± 342213.5319727571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72627243.95744681,
            "unit": "ns",
            "range": "± 21959025.217554882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112819953.89130434,
            "unit": "ns",
            "range": "± 2777928.5057828245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230792803.2222222,
            "unit": "ns",
            "range": "± 9232914.257431291"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69149.92857142857,
            "unit": "ns",
            "range": "± 9353.911865147777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340092.24742268043,
            "unit": "ns",
            "range": "± 36764.67304952058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335825.63483146066,
            "unit": "ns",
            "range": "± 30494.579417045952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334291.95604395604,
            "unit": "ns",
            "range": "± 24533.335589181097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4364106.338983051,
            "unit": "ns",
            "range": "± 191465.30940730445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3983241.5483870967,
            "unit": "ns",
            "range": "± 120052.08305504704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16967.376404494382,
            "unit": "ns",
            "range": "± 2687.079344754283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89865.57731958762,
            "unit": "ns",
            "range": "± 8895.008751207812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100333.19473684211,
            "unit": "ns",
            "range": "± 10502.208366626317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111081.58064516129,
            "unit": "ns",
            "range": "± 12876.322481950603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6303.20652173913,
            "unit": "ns",
            "range": "± 1358.8840568484864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20768.468421052632,
            "unit": "ns",
            "range": "± 4448.307333951874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1972860.39,
            "unit": "ns",
            "range": "± 548253.5369745175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2997599.076923077,
            "unit": "ns",
            "range": "± 140073.45639468372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2141715.36,
            "unit": "ns",
            "range": "± 198203.83795782697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5807568.043478261,
            "unit": "ns",
            "range": "± 221030.60227005839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3687184.632183908,
            "unit": "ns",
            "range": "± 415750.72876231745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3765111.9270833335,
            "unit": "ns",
            "range": "± 253680.68041501747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4940392.361702127,
            "unit": "ns",
            "range": "± 463615.8216502862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4134830.883838384,
            "unit": "ns",
            "range": "± 373336.71256137785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7725876.948275862,
            "unit": "ns",
            "range": "± 417390.71940560045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7496104.7705502715,
            "unit": "ns",
            "range": "± 432130.87894625217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2136953.674723307,
            "unit": "ns",
            "range": "± 79809.35796440569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401393.0712594697,
            "unit": "ns",
            "range": "± 39577.34852205124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3013191.8049665177,
            "unit": "ns",
            "range": "± 85622.11150866939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 905909.6746651785,
            "unit": "ns",
            "range": "± 9899.111903752611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761784.2065104167,
            "unit": "ns",
            "range": "± 8514.084346365224"
          }
        ]
      }
    ]
  }
}